const { swap, randomInt } = require('../utils')

// 在原数组上操作的版本，比较节约空间
function partition (arr, start, end) {
  // 随机找一个元素作为基准
  swap(arr, start, randomInt(start, end))
  const pivot = arr[start]
  let left = start
  let right = end + 1
  let cur = start + 1
  // 从第二个元素开始比较
  for (; cur < right; cur ++) {
    if (arr[cur] < pivot) { 
      // 如果当前元素比基数小，就和右边的大数交换，left就往右移了一位
      // 可以看出最坏的情况，相当于冒泡
      swap(arr, cur, ++ left)
    }
  }
  // 把基数放在本应属于他的位置
  swap(arr, start, left)
  return left
}

function quickSort (arr, start, end) {
  start = typeof start !== 'number' ? 0 : start
  end = typeof end !== 'number' ? arr.length - 1 : end
  if (start < end) {
  	const partitionIndex = partition(arr, start, end)
    quickSort(arr, start, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, end)
  }
  return arr
}

module.exports = quickSort