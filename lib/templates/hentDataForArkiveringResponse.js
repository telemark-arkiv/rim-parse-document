'use strict'

module.exports = (data) => {
  const ctx = data['ser:HentDataForArkiveringResponse']['HentDataForArkiveringResponseElm']
  var template = {}

  if (ctx['Elevelement']) {
    template['Elevelement'] = Array.isArray(ctx['Elevelement']) ? ctx['Elevelement'] : [ctx['Elevelement']]
  }

  if (ctx['Feilmelding']) {
    template['Feilmelding'] = ctx['Feilmelding']
  }

  return template
}
