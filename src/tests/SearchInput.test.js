import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { SearchInput } from '../components/searchInputComponent'

describe('SearchInput', () => {
  test('renders the SearchInput component correctly', () => {
    render(
      <SearchInput
        name='search'
        id='search-input'
        placeholder='Search...'
        onChange={() => {}}
      />
    )

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  test('calls the onChange callback with the correct value when input changes', () => {
    const handleChange = jest.fn()
    render(
      <SearchInput
        name='search'
        id='search-input'
        placeholder='Search...'
        onChange={handleChange}
      />
    )

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'test' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('test')
  })

  test('calls the onChange callback when input value changes', () => {
    const handleChange = jest.fn()
    render(
      <SearchInput
        name='search'
        id='search-input'
        placeholder='Search...'
        onChange={handleChange}
      />
    )

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'test' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('test')
  })

  test('limits the input length based on the maxLength prop', () => {
    render(
      <SearchInput
        name='search'
        id='search'
        placeholder='Search...'
        onChange={() => {}}
        maxLength={30}
      />
    )

    const inputElement = screen.getByPlaceholderText('Search...')
    fireEvent.change(inputElement, { target: { value: 'abcdefghijklmnopqrstuvwxyz' } })

    expect(inputElement.value.length).toBeLessThanOrEqual(30)  
  })

  test('applies required and disabled attributes correctly', () => {
    render(
      <SearchInput
        name='search'
        id='search-input'
        placeholder='Search...'
        onChange={() => {}}
        required
        disabled
      />
    )

    const input = screen.getByPlaceholderText('Search...')

    expect(input).toBeRequired()
    expect(input).toBeDisabled()
  })
})
