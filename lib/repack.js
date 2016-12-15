'use strict'

module.exports = (data) => {
  const info = data['s:Envelope']['s:Body']['ns0:Archive']['ns0:request']
  const student = info['ns0:Student']
  const address = student['ns0:OfficialAddress']
  const document = student['ns0:Document']
  const template = {
    info: {
      area: info['ns0:Area']['_'],
      school: info['ns0:School']['_'],
      source: info['ns0:SourceApplicationName']['_']
    },
    person: {
      personalIdNumber: student['ns0:PersonalIdentityNumber']['_'],
      firstName: student['ns0:FirstName']['_'],
      lastName: student['ns0:LastName']['_'],
      email: student['ns0:Email']['_'],
      phone: student['ns0:Phone']['_'],
      address: {
        street: address['ns0:AddressLine1']['_'],
        street2: address['ns0:AddressLine2']['_'],
        city: address['ns0:City']['_'],
        zip: address['ns0:ZipCode']['_']
      }
    },
    document: {
      type: document['ns0:DocumentType']['_'],
      date: document['ns0:DocumentDate']['_'],
      title: document['ns0:Title']['_'],
      data: document['ns0:FileDataBase64']['_']
    }
  }

  return template
}
