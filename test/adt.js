import parser from '../lib/parser'
import chai from 'chai'

chai.should()

describe('ADT', () => {

  describe('patient registration', function() {
    it(`A04`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getADT04(message_to_encode)
      encoded_message.should.be.equal('a04')
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
