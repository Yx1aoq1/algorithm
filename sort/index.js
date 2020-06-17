const fs = require('fs')

let modules = {}

fs.readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js')
  .forEach(fileName => {
    let fun = require('./' + fileName)
    modules[fileName.split('.')[0]] = fun
  })

module.exports = modules