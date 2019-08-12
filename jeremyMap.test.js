const testFunctions = require('./jeremyMap')

test('multiplyData is multiplying provided data', () => {
  const expected = 10
  const inputValue = 2
  const multiplier = 5

  const actual = testFunctions.multiplyData(inputValue, multiplier)
  expect(actual).toBe(expected)
})

test('jeremyMap uses multiplyData correctly and constructs new array.', (done) => {
  const inputData = [1, 2, 3, 4]
  const multiplier = 2
  const expected = [2, 4, 6, 8]

  testFunctions.jeremyMap(inputData, testFunctions.multiplyData(data, multiplier))
})
