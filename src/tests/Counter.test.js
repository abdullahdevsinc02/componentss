import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { Counter } from '../components/Counter'

describe('Counter', () => {
  test('renders the Counter component correctly', () => {
    render(
      <Counter
        textLabel='Counter'
        placeHolder='Enter a number'
        value={0}
        onChange={() => {}}
      />
    )

    expect(screen.getByText('Counter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter a number')).toBeInTheDocument()
  })

  test('calls the onChange callback with the correct value when input changes', () => {
    const handleChange = jest.fn()
    render(
      <Counter
        textLabel='Counter'
        placeHolder='Enter a number'
        value={0}
        onChange={handleChange}
      />
    )

    const input = screen.getByPlaceholderText('Enter a number')
    fireEvent.change(input, { target: { value: '10' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('10')
  })

  test('displays the correct value in the input', () => {
    render(
      <Counter
        textLabel='Counter'
        placeHolder='Enter a number'
        value={15}
        onChange={() => {}}
      />
    )

    const input = screen.getByPlaceholderText('Enter a number')
    expect(input.value).toBe('15')
  })

  test('applies disabled styles when disabled prop is true', () => {
    render(
      <Counter
        textLabel='Counter'
        placeHolder='Enter a number'
        value={0}
        onChange={() => {}}
        disabled={true}
      />
    )

    const input = screen.getByPlaceholderText('Enter a number')
    expect(input).toBeDisabled()
    expect(input).toHaveStyle(`
      background: #F8F9FD
      color: #C4C4C4
    `)
  })

  test('disables the Counter component when disabled prop is true', () => {
    render(
      <Counter
        textLabel='Counter'
        placeHolder='Enter a number'
        value={0}
        onChange={() => {}}
        disabled={true}
      />
    )
  
    const input = screen.getByPlaceholderText('Enter a number')
    expect(input).toBeDisabled()
  })  
})
