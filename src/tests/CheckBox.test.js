import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { CheckBox } from '../components'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'

test('renders checkbox with label', () => {
  const { getByRole } = render(<CheckBox textLabel='Check me' />)

  const checkbox = getByRole('checkbox')
  expect(checkbox).toBeInTheDocument()
})
test('calls onClick handler when checkbox is clicked', () => {
  const onClickMock = jest.fn()
  const { getByRole } = render(
    <CheckBox textLabel='Check me' onClick={onClickMock} />
  )

  const checkbox = getByRole('checkbox')
  fireEvent.click(checkbox)

  expect(onClickMock).toHaveBeenCalledTimes(1)
  expect(onClickMock).toHaveBeenCalledWith(true)
})

test('updates checkbox state when clicked', () => {
  const { getByRole } = render(<CheckBox textLabel='Check me' />)

  const checkbox = getByRole('checkbox')
  fireEvent.click(checkbox)

  expect(checkbox.checked).toBe(true)

  fireEvent.click(checkbox)

  expect(checkbox.checked).toBe(false)
})

test('renders checkbox with custom style', () => {
  const { getByRole } = render(
    <CheckBox textLabel='Check me' style={{ color: 'red' }} />
  )

  const checkbox = getByRole('checkbox')

  expect(checkbox).toHaveStyle('color: red')
})

test('renders checkbox with custom text style', () => {
  const { getByText } = render(
    <CheckBox textLabel='Check me' textStyle={{ fontWeight: 'bold' }} />
  )

  const label = getByText('Check me')

  expect(label).toHaveStyle('font-weight: bold')
})

test('renders checkbox with additional className', () => {
  const { container } = render(
    <CheckBox textLabel='Check me' className='custom-class' />
  )

  const checkbox = container.querySelector('.custom-class')

  expect(checkbox).toBeInTheDocument()
})

test('renders checkbox as required', () => {
  const { getByText } = render(<CheckBox textLabel='Check me' required />)

  const label = getByText('Check me*')

  expect(label).toBeInTheDocument()
})
