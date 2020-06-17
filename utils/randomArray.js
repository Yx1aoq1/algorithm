const randomInt = require('./randomInt')

function randomArray (len, min, max) {
  let arr = []
  for (let i = 0; i < len; i ++) {
    arr.push(randomInt(min, max))
  }
  return arr
}

module.exports = randomArray