function insertionSort (arr, left, right) {
  for (let i = left + 1; i <= right; i ++) {
    const key = arr[i]
    let j
    for (j = i - 1;(j >= left) && (arr[j] > key); j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = key
  }
  return
}

function __mergeSort(arr, left, right) {
  // if (left >= right) return
  if (right - left <= 15) { // 当数据小于某个规模时，使用插入排序
    insertionSort(arr, left, right)
    return
  }
  const mid = parseInt((left + right) / 2)
  __mergeSort(arr, left, mid)
  __mergeSort(arr, mid + 1, right)
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, left, mid, right)
  }
}

function __merge (arr, left, mid, right){
  let aux = new Array(right - left + 1)
  for (let i = left; i <= right; i ++) {
    aux[i - left] = arr[i]
  }
  let i = left
  let j = mid + 1
  for (let k = left; k <= right; k ++) {
    if (i > mid) {
      arr[k] = aux[j - left]
      j ++
    } else if (j > right) {
      arr[k] = aux[i - left]
      i ++
    } else if (aux[i - left] < aux[j - left]) {
      arr[k] = aux[i - left]
      i ++
    } else {
      arr[k] = aux[j - left]
      j ++
    }
  }
}

function mergeSort (arr) {
  __mergeSort(arr, 0, arr.length - 1)
  return arr
}

module.exports = mergeSort