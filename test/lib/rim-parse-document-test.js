'use strict'

const fs = require('fs')
const tap = require('tap')
const rimParseDocument = require('../../index')
const document = fs.readFileSync('test/data/data.xml', 'utf-8')
const parsedDocument = require('../data/data-parsed.json')

tap.test('datatest - callback', (childTest) => {
  rimParseDocument(document, (error, data) => {
    if (error) {
      throw error
    } else {
      tap.equal(JSON.stringify(parsedDocument), JSON.stringify(data), 'it returns expected data')
      childTest.done()
    }
  })
})

tap.test('datatest - promises', (childTest) => {
  rimParseDocument(document)
    .then((data) => {
      tap.equal(JSON.stringify(parsedDocument), JSON.stringify(data), 'it returns expected data')
      childTest.done()
    })
    .catch((error) => {
      throw error
    })
})
