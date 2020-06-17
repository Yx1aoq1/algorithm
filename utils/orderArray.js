const randomInt = require('./randomInt')
const swap = require('./swap')

function orderArray (len, swapTimes) {
  let arr = []
  for (let i = 0; i < len; i ++) {
    arr.push(i)
  }
  for (let i = 0; i < swapTimes; i ++) {
    const posx = randomInt(0, len)
    const posy = randomInt(0, len)
    swap(arr, posx, posy)
  }
  return arr
}

module.exports = orderArray