'use strict'

const selectTemplate = require('./select-template')

module.exports = (data) => {
  const template = require(`./templates/${selectTemplate(data)}`)

  return template(data)
}
