function countingSort (arr, maxValue) {
  // 开辟空间，maxValue表示可能存在于数组的确定最大值
  // 以分数为例，已知最高分为满分100，那么 maxValue = 100
  let bucket = new Array(maxValue + 1)
  let sortedIndex = 0
  const arrLen = arr.length
  const bucketLen = maxValue + 1
  for (let i = 0; i < arrLen; i ++) {
  	if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]] ++
  }
  for (let j = 0; j < bucketLen; j ++) {
  	while (bucket[j] > 0) {
      arr[sortedIndex ++] = j
      bucket[j]--
    }
  }
  return arr
}

module.exports = countingSort