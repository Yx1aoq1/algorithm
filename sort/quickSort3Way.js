const { swap } = require('../utils')

function partition (arr, start, end) {
  // 基准为数组的始元素
  const pivot = arr[start]
  let left = start // arr[start, left] < pivot
  let right = end + 1 // arr[right, end] > pivot
  let cur = start + 1 // arr[left + 1, i] = pivot
  // 三路的意思，是指划分了三个区域
  while (cur < right) {
    if (arr[cur] < pivot) {
      swap(arr, cur ++, ++ left)
    } else if (arr[cur] > pivot) {
      swap(arr, cur, -- right)
    } else { // arr[cur] === pivot
      cur ++
    }
  }

  swap(arr, start, left)
  return {
    pLeft: left,
    pRight: right
  }
}

function quickSortThreeWay (arr, start, end) {
  start = typeof start !== 'number' ? 0 : start
  end = typeof end !== 'number' ? arr.length - 1 : end
  if (start < end) {
  	const partitionIndex = partition(arr, start, end)
    quickSortThreeWay(arr, start, partitionIndex.pLeft - 1)
    quickSortThreeWay(arr, partitionIndex.pRight, end)
  }
  return arr
}

module.exports = quickSortThreeWay
