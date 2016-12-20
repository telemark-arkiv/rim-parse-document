'use strict'

const parser = require('xml2js').parseString
const repack = require('./lib/repack')
const options = {
  trim: true,
  strict: true,
  explicitArray: false,
  stripPrefix: true,
  xmlns: false
}

module.exports = (document, callback) => {
  return new Promise((resolve, reject) => {
    parser(document, options, (error, data) => {
      if (error) {
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else {
        const out = repack(data)
        if (callback) {
          return callback(null, out)
        }
        resolve(out)
      }
    })
  })
}
