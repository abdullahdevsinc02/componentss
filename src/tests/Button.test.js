import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { Button } from '../components/Button'

describe('Button', () => {
  test('renders the Button component correctly with label', () => {
    render(
      <Button label='Submit' />
    )

    const buttonLabel = screen.getByText('Submit')
    expect(buttonLabel).toBeInTheDocument()
  })

  test('calls the onClick callback when the button is clicked', () => {
    const handleClick = jest.fn()

    render(
      <Button label='Submit' onClick={handleClick} />
    )

    const button = screen.getByText('Submit')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders the button with an icon when icon prop is provided', () => {
    render(
      <Button label='Submit' icon={<span className='icon'>+</span>} />
    )

    const icon = screen.getByText('+')
    expect(icon).toBeInTheDocument()
  })

  test('button is clickable when it is not disabled', () => {
    const handleClick = jest.fn()
  
    render(
      <Button label='Click Me' onClick={handleClick} />
    )
  
    const button = screen.getByText('Click Me')
    fireEvent.click(button)
  
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('button is not clickable when it is disabled', () => {
    const handleClick = jest.fn()
  
    render(
      <Button label='Click Me' onClick={handleClick} disabled={true} />
    )
  
    const button = screen.getByText('Click Me')
    fireEvent.click(button)
  
    expect(handleClick).not.toHaveBeenCalled()
  })
})
