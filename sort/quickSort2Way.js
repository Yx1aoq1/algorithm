const { swap, randomInt } = require('../utils')

function partition (arr, start, end) {
  // 随机找一个元素作为基准
  swap(arr, start, randomInt(start, end))
  const pivot = arr[start]
  let left = start + 1
  let right = end
  while (true) {
    while (left <= right && arr[left] < pivot) {
      left ++ // 在左区间中（<= pivot的部分）寻找大于基准的索引
    }
    while (right >= left + 1 && arr[right] > pivot) {
      right -- // 在右区间中（>= pivot的部分）寻找小于基准的索引
    }
    if (left > right) break
    // 交换两个索引值
    // arr[start + 1, left] 这个区间内的值都小于pivot
    // arr[right, end] 这个区间内的值都大于pivot
    swap(arr, left, right)
    left ++
    right --
  }
  swap(arr, start, right)
  return right
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