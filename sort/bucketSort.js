const { swap } = require('../utils')

function bucketSort (arr, bucketSize = 5) {
  // 生成一个bucketSize * bucketSize的数组空间
  const buckets = [...new Array(bucketSize)].map(() => [])
  const max = Math.max(...arr)
  
  for (let i = 0; i < arr.length; i ++) {
    const number = arr[i]
    const bucketIndex = Math.floor(number / (max + 1) * bucketSize) // 映射函数
    const bucket = buckets[bucketIndex]
    bucket.push(number)

    let j = bucket.length - 1
    // 对加进桶内的元素排序 这里的排序是普通的冒泡
    while (j > 0 && bucket[j - 1] > bucket[j]) {
      swap(bucket, j - 1, j)
      j --
    }
  }
  
  let i = 0
  for (let bucketIndex = 0; bucketIndex < bucketSize; bucketIndex ++) {
    const bucket = buckets[bucketIndex]
    for (let j = 0; j < bucket.length; j ++) {
      arr[i] = bucket[j] // 将元素从每个桶中取出
      i ++
    }
  }
  return arr
}

module.exports = bucketSort