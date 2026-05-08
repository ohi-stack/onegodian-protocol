import { classifyAlignment } from '../src/classify'

describe('classifyAlignment', () => {
  test('returns guide for high scores', () => {
    expect(classifyAlignment(95)).toBe('guide')
  })

  test('returns activated for medium-high scores', () => {
    expect(classifyAlignment(75)).toBe('activated')
  })
})
