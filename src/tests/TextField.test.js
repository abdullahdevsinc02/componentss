import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { TextField } from '../components/textFieldComponent'

describe('TextField', () => {
  test('renders the TextField component correctly', () => {
    render(
      <TextField
        textLabel='Username'
        placeHolder='Enter your username'
        onChange={() => {}}
      />
    )

    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument()
  })

  test('calls the onChange callback with the correct value when input changes', () => {
    const handleChange = jest.fn()
    render(
      <TextField
        textLabel='Username'
        placeHolder='Enter your username'
        onChange={handleChange}
      />
    )

    const input = screen.getByPlaceholderText('Enter your username')
    fireEvent.change(input, { target: { value: 'testuser' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('testuser')
  })

  test(`applies error styles when type prop is 'error'`, () => {
    render(
      <TextField
        textLabel='Username'
        placeHolder='Enter your username'
        type='error'
        onChange={() => {}}
      />
    )
  
    const labelError = screen.getByText(/Username.*$/) // Regex pattern to match 'Username' with any suffix
    const input = screen.getByPlaceholderText('Enter your username')
  
    expect(labelError).toBeInTheDocument()
    expect(input).toHaveStyle(`
      background: rgba(255, 104, 104, 0.05)
      border: 1px solid rgba(255,104,104,1)
      outline: 0
    `)
  })

  test(`applies success styles when type prop is 'success'`, () => {
    render(
      <TextField
        textLabel='Username'
        placeHolder='Enter your username'
        type='success'
        onChange={() => {}}
      />
    )

    const input = screen.getByPlaceholderText('Enter your username')

    expect(input).toHaveStyle(`
      border: 1px solid #1eae63
      outline: 0
    `)
  })

  test('applies focus styles when input is focused', () => {
    render(
      <TextField
        textLabel='Username'
        placeHolder='Enter your username'
        onChange={() => {}}
      />
    )

    const input = screen.getByPlaceholderText('Enter your username')
    fireEvent.focus(input)

    expect(input).toHaveStyle(`
      border: 1px solid #1eae63
      outline: 0
    `)
  })

  // test('calls handleFocus and handleBlur functions on input focus and blur events', () => {
  //   const handleFocus = jest.fn()
  //   const handleBlur = jest.fn()

  //   render(
  //     <TextField
  //       textLabel='Username'
  //       placeHolder='Enter your username'
  //       onChange={() => {}}
  //       handleFocus={handleFocus}
  //       handleBlur={handleBlur}
  //     />
  //   )

  //   const input = screen.getByPlaceholderText('Enter your username')
  //   fireEvent.focus(input)
  //   fireEvent.blur(input)

  //   expect(handleFocus).toHaveBeenCalledTimes(1)
  //   expect(handleBlur).toHaveBeenCalledTimes(1)
  // })
})
