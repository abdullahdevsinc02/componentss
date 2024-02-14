import { Color } from '../components'

describe('Color', () => {
  test('has a valid green color', () => {
    expect(Color.green).toBe('#1EAE63')
  })

  test('has a valid primary-100 color', () => {
    expect(Color['primary-100']).toBe('rgba(30, 174, 99, 1)')
  })

  test('has a valid neutral-50 color', () => {
    expect(Color['neutral-50']).toBe('rgba(131, 135, 153, 1)')
  })
})
