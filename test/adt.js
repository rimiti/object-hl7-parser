import test from 'ava'
import * as parser from '../src/lib/parser'

test('A04 - Patient registration', t => {
  const a04 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A04|154779|P|2.5.1|||||FRA|UTF-8|\nEVN|ADT^A04|20160923155836|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nPV1||U|`

  const message_to_encode = {
    "message_datetime": "20160923155836",
    "event": {
      "recorded_datetime": "20160923155836"
    },
    "fiche": {
      "id": "123456",
      "firstname": "DO BAIRRO",
      "lastname": "Dimitri",
      "date_of_birth": "19920506",
      "sex": "M",
      "patient_alias": "Nom usuel",
      "address": {
        "street": "Avenue des Champs-Élysées",
        "city": "Paris",
        "zipcode": "75000"
      },
      "contacts": [{
        "number": "0100000000",
        "email": "dimitri.dobairro@clicrdv.com"
      }, {
        "number": "0200000000"
      }]
    }
  }

  const encoded_message = parser.getADT04(message_to_encode)
  t.is(encoded_message.getMessage(), a04)
})

test(`A08 - Patient information update`, t => {
  const a08 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A08|154779|P|2.5.1|||||FRA|UTF-8|\nEVN|ADT^A08|20160923155836|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nPV1||U|`

  const message_to_encode = {
    "message_datetime": "20160923155836",
    "event": {
      "recorded_datetime": "20160923155836"
    },
    "fiche": {
      "id": "123456",
      "firstname": "DO BAIRRO",
      "lastname": "Dimitri",
      "date_of_birth": "19920506",
      "sex": "M",
      "patient_alias": "Nom usuel",
      "address": {
        "street": "Avenue des Champs-Élysées",
        "city": "Paris",
        "zipcode": "75000"
      },
      "contacts": [{
        "number": "0100000000",
        "email": "dimitri.dobairro@clicrdv.com"
      }, {
        "number": "0200000000"
      }]
    }
  }
  const encoded_message = parser.getADT08(message_to_encode)
  t.is(encoded_message.getMessage(), a08)
})

test(`A40 - Merge patient (patient identifier list)`, t => {
  const a40 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A40|154779|P|2.5.1|||||FRA|UTF-8|\nEVN|ADT^A40|20160923155836|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nPV1||U|\nMRG|21448557^^^Clicrdv^^PI`
  const message_to_encode = {
    "message_datetime": "20160923155836",
    "event": {
      "recorded_datetime": "20160923155836"
    },
    "fiche": {
      "id": "123456",
      "firstname": "DO BAIRRO",
      "lastname": "Dimitri",
      "date_of_birth": "19920506",
      "sex": "M",
      "patient_alias": "Nom usuel",
      "address": {
        "street": "Avenue des Champs-Élysées",
        "city": "Paris",
        "zipcode": "75000"
      },
      "contacts": [{
        "number": "0100000000",
        "email": "dimitri.dobairro@clicrdv.com"
      }, {
        "number": "0200000000"
      }]
    },
    "fiche_to_update": {
      "id": "21448557",
      "assigning_authority": "Clicrdv"
    }
  }
  const encoded_message = parser.getADT40(message_to_encode)
  t.is(encoded_message.getMessage(), a40)
})
