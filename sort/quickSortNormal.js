// 普通语义化版（阮一峰），好理解，但是性能差一些
function quickSort (arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  // 基准为数组中间的元素
  const pivotIndex = Math.floor(len / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < len - 1; i ++) {
    // 以基准为界，分割左右区域
  	if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

module.exports = quickSort