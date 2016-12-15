[![Build Status](https://travis-ci.org/telemark/rim-parse-document.svg?branch=master)](https://travis-ci.org/telemark/rim-parse-document)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# rim-parse-document
parse xml from rim service and return json

## Usage

Input [xml](test/data/data.xml) and get [json](test/data/data-parsed.json) in return

### Promises
```JavaScript
'use strict'

const fs = require('fs')
const rimParseDocument = require('rim-parse-document')
const document = fs.readFileSync('test/data/data.xml', 'utf-8')

rimParseDocument(document)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })
```

### Callback
```JavaScript
'use strict'

const fs = require('fs')
const rimParseDocument = require('rim-parse-document')
const document = fs.readFileSync('test/data/data.xml', 'utf-8')

rimParseDocument(document, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(JSON.stringify(data, null, 2))
  }
})

```

## License
[MIT](LICENSE)
