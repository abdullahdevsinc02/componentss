import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TextArea } from '../components'

describe('TextArea', () => {
  test('renders the TextArea component correctly', () => {
    render(
      <TextArea
        textLabel='Label'
        placeHolder='Placeholder'
        onChange={() => {}}
      />
    )

    const labelElement = screen.getByText('Label')
    const inputElement = screen.getByPlaceholderText('Placeholder')

    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  test('triggers onChange event correctly', () => {
    const onChangeMock = jest.fn()
    render(
      <TextArea
        textLabel='Label'
        placeHolder='Placeholder'
        onChange={onChangeMock}
      />
    )

    const inputElement = screen.getByPlaceholderText('Placeholder')
    fireEvent.change(inputElement, { target: { value: 'Test input' } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith('Test input')
  })
})
