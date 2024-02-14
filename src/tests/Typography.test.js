import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'
import { Typography } from '../components/typography'

describe('Typography', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <Typography>Example Text</Typography>
    )
    const textElement = getByText('Example Text')

    expect(textElement).toBeInTheDocument()
  })

  test('applies default size correctly', () => {
    const { getByText } = render(
      <Typography>Example Text</Typography>
    )
    const textElement = getByText('Example Text')

    expect(textElement).toHaveClass('h1')
  })

  test('applies custom size correctly', () => {
    const { getByText } = render(
      <Typography size='h3'>Example Text</Typography>
    )
    const textElement = getByText('Example Text')

    expect(textElement).toHaveClass('h3')
  })

  test('applies custom classNames correctly', () => {
    const { getByText } = render(
      <Typography className='custom-class'>Example Text</Typography>
    )
    const textElement = getByText('Example Text')

    expect(textElement).toHaveClass('custom-class')
  })

  test('applies custom style correctly', () => {
    const { getByText } = render(
      <Typography style={{ color: 'red' }}>Example Text</Typography>
    )
    const textElement = getByText('Example Text')

    expect(textElement).toHaveStyle('color: red')
  })
})
