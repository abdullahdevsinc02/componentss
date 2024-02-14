import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { PopUp } from '../components'

describe('PopUp', () => {
  test('renders the PopUp component correctly', () => {
    render(
      <PopUp
        title='Confirmation'
        message='Are you sure?'
        type='success'
        onClickRight={() => {}}
        onClickLeft={() => {}}
      />
    )

    expect(screen.getByText('Confirmation')).toBeInTheDocument()
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  test('calls the onClickRight and onClickLeft callbacks correctly', () => {
    const handleClickRight = jest.fn()
    const handleClickLeft = jest.fn()

    render(
      <PopUp
        title='Confirmation'
        message='Are you sure?'
        type='success'
        onClickRight={handleClickRight}
        onClickLeft={handleClickLeft}
      />
    )

    const cancelButton = screen.getByText('Cancel')
    const continueButton = screen.getByText('Continue')

    fireEvent.click(cancelButton)
    fireEvent.click(continueButton)

    expect(handleClickLeft).toHaveBeenCalledTimes(1)
    expect(handleClickRight).toHaveBeenCalledTimes(1)
  })

  test('displays custom button labels correctly', () => {
    render(
      <PopUp
        title='Confirmation'
        message='Are you sure?'
        type='success'
        onClickRight={() => {}}
        onClickLeft={() => {}}
        leftButtonLabel='No'
        rightButtonLabel='Yes'
      />
    )

    expect(screen.getByText('No')).toBeInTheDocument()
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })
})
