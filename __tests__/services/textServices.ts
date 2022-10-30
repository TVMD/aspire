import { toMoneyString } from "../../src/services/textServices"

test('Parse money correctly ', () => {
  expect(toMoneyString(100)).toBe('100')
  expect(toMoneyString(5000)).toBe('5,000')
  expect(toMoneyString(5000, true)).toBe('$5,000')
  expect(toMoneyString(-20, false)).toBe('-20')
})

test('Parse money not fall apart ', () => {
  expect(toMoneyString(NaN)).toBe('0')
})
