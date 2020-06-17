function radixSort (arr) {
  const max = Math.max(...arr)
  const buckets = Array.from({ length: 10 }, () => [])

  let m = 1
  while (m < max) {
    for (let i = 0; i < arr.length; i ++) {
      const number = arr[i]
      // digit表示某位数的值
      const digit = ~~((number % (m * 10)) / m)
      // 把该位数的值放到桶buckets中
      // 通过索引确定顺序 类比计数排序
      buckets[digit].push(number)
    }

    let i = 0
    for (let bucketIndex = 0; bucketIndex < buckets.length; bucketIndex ++) {
      const bucket = buckets[bucketIndex]
      while (bucket.length > 0) {
        // shift从头部取值
        // 保证按照队列先入先出
        arr[i ++] = bucket.shift()
      }
    }
    // 每次最外层while循环后m要乘等10
    // 也就是要判断下一位 比如当前是个位 下次就要判断十位
    m *= 10
  }

  return arr
}

module.exports = radixSort