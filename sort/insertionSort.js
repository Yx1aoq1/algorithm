function insertionSort (arr) {
  const len = arr.length
  for (let i = 1; i < len; i ++) {
    const key = arr[i]
    let j
    for (j = i - 1; (j >= 0) && (arr[j] > key); j --) {
      arr[j + 1] = arr[j] // 将数据向右移动，直到找到指定位置
    }
    arr[j + 1] = key // 将数据插入指定位置
  }
  return arr
}

module.exports = insertionSort