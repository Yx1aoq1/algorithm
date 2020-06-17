function shellSort (arr) {
  const len = arr.length
  let gap = 1
  while (gap < len / 3) { // 动态定义间隔序列
  	gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
  	for (let i = gap; i < len; i ++) { // 插入排序
      const temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

module.exports = shellSort