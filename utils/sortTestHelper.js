function sortTestHelper (...arguments) {
  const [sortName, sortFun, ...others] = arguments
  const [sortArray] = others
  const start = +new Date()
  console.log(`----- ${sortName} -----`)
  console.log('before sort: ', [...sortArray])
  const result = sortFun(...others)
  const end = +new Date()
  console.log('after sort: ', [...result])
  console.log(`cost: ${(end - start) / 1000}s`)
}

module.exports = sortTestHelper