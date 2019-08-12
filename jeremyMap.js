module.exports = {
  jeremyMap,
  multiplyData
}

function jeremyMap (array, callBack) {
  var returnArray = []

  for (let i = 0; i < array.length; i++) {
    returnArray.push(callBack(array[i]))
  }

  return returnArray
}

function multiplyData (data, multiplier) {
  return data * multiplier
}

const testArray = [1, 2, 3, 4]

console.log(jeremyMap())
