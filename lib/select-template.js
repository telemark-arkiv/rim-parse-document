'use strict'

module.exports = (data) => {
  if (data['ser:HentDataForArkivering']) {
    return 'hentDataForArkivering'
  } else if (data['ser:HentDataForArkiveringResponse']) {
    return 'hentDataForArkiveringResponse'
  } else {
    return 'standard'
  }
}
