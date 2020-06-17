const { 
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  mergeInsertSort,
  quickSortNormal,
  quickSortSwap,
  quickSort2Way,
  quickSort3Way,
  countingSort,
  bucketSort,
  radixSort,
  shellSort
} = require('./sort')
const { randomArray, orderArray, sortTestHelper } = require('./utils')

const ARRAY_LENS = 10
const MIN_RANGE = 0
const MAX_RANGE = 99
const SWAP_TIMES = 0

const normalArr = randomArray(ARRAY_LENS, MIN_RANGE, MAX_RANGE)
const orderArr = orderArray(ARRAY_LENS, SWAP_TIMES)

// sortTestHelper('bubbleSort', bubbleSort, [...normalArr])
// sortTestHelper('selectionSort', selectionSort, [...normalArr])
// sortTestHelper('insertionSort', insertionSort, [...normalArr])
// sortTestHelper('mergeSort', mergeSort, [...normalArr])
// sortTestHelper('mergeInsertSort', mergeInsertSort, [...normalArr])
// sortTestHelper('quickSortNormal', quickSortNormal, [...normalArr])
// sortTestHelper('quickSortSwap', quickSortSwap, [...normalArr])
// sortTestHelper('quickSort2Way', quickSort2Way, [...normalArr])
// sortTestHelper('quickSort3Way', quickSort3Way, [...normalArr])
// sortTestHelper('countingSort', countingSort, [...normalArr], MAX_RANGE)
// sortTestHelper('bucketSort', bucketSort, [...normalArr], 100)
// sortTestHelper('radixSort', radixSort, [...normalArr])
sortTestHelper('shellSort', shellSort, [...normalArr])

// console.log('-----')

// sortTestHelper('mergeSort', mergeSort, [...orderArr])
// sortTestHelper('mergeInsertSort', mergeInsertSort, [...orderArr])
// sortTestHelper('quickSortNormal', quickSortNormal, [...orderArr])
// sortTestHelper('quickSortSwap', quickSortSwap, [...orderArr])
// sortTestHelper('quickSort2Way', quickSort2Way, [...orderArr])
// sortTestHelper('quickSort3Way', quickSort3Way, [...orderArr])
// sortTestHelper('countingSort', countingSort, [...orderArr], MAX_RANGE)
// sortTestHelper('bucketSort', bucketSort, [...orderArr], 100)