const testFunctions = require('./jeremyMap')

test('multiplyData is multiplying provided data', () => {
  const expected = 10
  const inputValue = 2
  const multiplier = 5

  const actual = testFunctions.multiplyData(inputValue, multiplier)
  expect(actual).toBe(expected)
})
