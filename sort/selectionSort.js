const { swap } = require('../utils')

function selectionSort (arr) {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len - 1; i ++) {
    minIndex = i                         // minIndex始终作为最小值的位置索引
    for (let j = i + 1; j < len; j ++) { // 当前最小值的后一位开始比较
      if (arr[j] < arr[minIndex]) {    // 寻找最小的数
        minIndex = j                 // 将最小数的索引保存
      }
    }
    swap(arr, i, minIndex) // 当前轮次中的i与最小值进行交换
  }
  return arr
}

module.exports = selectionSort