'use strict'

module.exports = (data) => {
  const info = data['s:Envelope']['s:Body']['ns0:Archive']['ns0:request']
  const student = info['ns0:Student']
  const address = student['ns0:OfficialAddress']
  const document = student['ns0:Document']
  const template = {
    info: {
      area: info['ns0:Area'],
      school: info['ns0:School'],
      source: info['ns0:SourceApplicationName']
    },
    person: {
      personalIdNumber: student['ns0:PersonalIdentityNumber'],
      firstName: student['ns0:FirstName'],
      lastName: student['ns0:LastName'],
      email: student['ns0:Email'],
      phone: student['ns0:Phone'],
      address: {
        street: address['ns0:AddressLine1'],
        street2: address['ns0:AddressLine2'],
        city: address['ns0:City'],
        zip: address['ns0:ZipCode']
      }
    },
    document: {
      type: document['ns0:DocumentType'],
      date: document['ns0:DocumentDate'],
      title: document['ns0:Title'],
      data: document['ns0:FileDataBase64']
    }
  }

  return template
}
