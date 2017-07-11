import parser from '../lib/parser'
import chai from 'chai'

chai.should()

describe('ADT', () => {

  describe('patient registration', function() {
    it(`A04`, (done) => {
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
          },{
            "number": "0200000000"
          }]
        }
      }

      const encoded_message = parser.getADT04(message_to_encode)
      encoded_message.log().should.be.equal(a04)
      done()
    })
  })

  describe('patient information update', function() {
    it(`A08`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getADT08(message_to_encode)
      encoded_message.should.be.equal('a08')
      done()
    })
  })

  describe('Merge patient - patient identifier list', function() {
    it(`A40`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getADT40(message_to_encode)
      encoded_message.should.be.equal('a40')
      done()
    })
  })
})
