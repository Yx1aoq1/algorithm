const { swap } = require('../utils')

// 改进后的冒泡
function bubbleSort (arr) {
  let len = arr.length
  let swapped
  do {
    swapped = false
    for (let i = 1; i < len; i ++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i)
        swapped = true
      }
    }
    len --
  } while (swapped)
  
  return arr
}

module.exports = bubbleSort