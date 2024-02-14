import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { ToggleSwitch } from '../components'

describe('ToggleSwitch', () => {
  test('renders with default unchecked state', () => {
    const { getByTestId } = render(<ToggleSwitch textLabel='Toggle Switch' />)
    const toggleSwitch = getByTestId('toggle-switch-input')
    expect(toggleSwitch.checked).toBe(false)
  })

  test('renders with default unchecked state', () => {
    const { getByTestId } = render(<ToggleSwitch textLabel='Toggle Switch' />)
    const toggleSwitch = getByTestId('toggle-switch-input')
    expect(toggleSwitch.checked).toBe(false)
  })

  test('renders with checked state when prop is passed', () => {
    const { getByTestId } = render(
      <ToggleSwitch textLabel='Toggle Switch' checked={true} />
    )
    const toggleSwitch = getByTestId('toggle-switch-input')
    expect(toggleSwitch.checked).toBe(true)
  })

  test('calls onToggle function when checked state changes', () => {
    const onToggleMock = jest.fn()
    const { getByTestId } = render(
      <ToggleSwitch textLabel='Toggle Switch' onToggle={onToggleMock} />
    )
    const toggleSwitch = getByTestId('toggle-switch-input')

    fireEvent.click(toggleSwitch)

    expect(onToggleMock).toHaveBeenCalledTimes(1)
    expect(onToggleMock).toHaveBeenCalledWith(true)

    fireEvent.click(toggleSwitch)

    expect(onToggleMock).toHaveBeenCalledTimes(2)
    expect(onToggleMock).toHaveBeenCalledWith(false)
  })  

  test('applies custom styles correctly', () => {
    const { getByTestId, getByText } = render(
      <ToggleSwitch
        textLabel='Toggle Switch'
        style={{ margin: '3px 0.5ex' }}
        textStyle={{ color: 'red' }}
      />
    )
    const toggleSwitch = getByTestId('toggle-switch-input')
    const labelText = getByText('Toggle Switch')
  
    expect(toggleSwitch).toHaveStyle('margin: 3px 0.5ex')
    expect(labelText).toHaveStyle('color: red')
  })
})
