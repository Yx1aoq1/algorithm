function mergeSort (arr) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right){
  let result = [] // 开辟新空间
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift()) // 把最小的最先取出，放到结果集中
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}

module.exports = mergeSort