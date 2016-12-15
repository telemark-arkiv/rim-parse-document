'use strict'

const fs = require('fs')
const rimParseDocument = require('./index')
const document = fs.readFileSync('test/data/data.xml', 'utf-8')

rimParseDocument(document)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })
