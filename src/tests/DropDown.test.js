import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DropDownComponent } from '../components'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom/extend-expect'

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

describe('DropDownComponent', () => {
  test('renders with label and placeholder', () => {
    const { getByText } = render(
      <DropDownComponent
        textLabel='Select an option'
        placeHolder='Placeholder'
        options={[]}
        selected={[]}
        setSelected={() => {}}
      />
    )

    const label = getByText('Select an option')
    const placeholder = getByText('Placeholder')

    expect(label).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })

  test('renders dropdown with selected options', () => {
    const selectedOptions = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]

    const { getByText } = render(
      <DropDownComponent
        textLabel='Select an option'
        placeHolder='Select'
        options={options}
        selected={selectedOptions}
        setSelected={() => {}}
      />
    )

    const selectedText = getByText('Option 1 + 1')
    expect(selectedText).toBeInTheDocument()
  })
})
