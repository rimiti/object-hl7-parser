# object-hl7-parser [![Build Status](https://travis-ci.org/rimiti/object-hl7-parser.svg?branch=master)](https://travis-ci.org/rimiti/object-hl7-parser) [![Coverage Status](https://coveralls.io/repos/github/rimiti/object-hl7-parser/badge.svg?branch=master)](https://coveralls.io/github/rimiti/object-hl7-parser?branch=master)
Convert your object into HL7 message.

# Install
```
$ npm install object-hl7-parser
```


## HL7 parsed messages:
Adt:
```
- A04 - Patient registration
- A08 - Patient information update
- A40 - Merge patient
```

Siu:
```
- S12 - Notification of new appointment booking
- S13 - Notification of appointment rescheduling
- S14 - Notification of appointment modification
- S15 - Notification of appointment cancellation
- S17 - Notification of appointment deletion
- S26 - Notification that patient did not show up for scheduled appointment
```


## How to use it ?

Create your hl7 mapping file like that:

```json
// json-hl7-mapping.json
{
  "format": "hl7-2.4",
  "adapter": "adaptor-name"
}
```

Import your parser, configure it and use it !

```js
// index.js
import parser from 'object-hl7-parser'
import config from './json-hl7-mapping.json'

parser.configure({
    "mapping": config
  }
)

const object = {
    firstname: "Dimitri",
    lastname: "DO BAIRRO",
    birthdate: "06/05/1992",
    phone: "33100000000",
    mobile: "33600000000"
}

const hl7Message = parser.encode(object)
console.log(hl7Message)
```

## Tests
```js
// Run tests
gulp mocha
```