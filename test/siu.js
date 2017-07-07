import parser from '../lib/parser'
import chai from 'chai'
chai.should()

describe('SIU', () => {

  describe('Notification of new appointment booking', function() {
    it(`S12`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU12(message_to_encode)
      encoded_message.should.be.equal('s12')
      done()
    })
  })

  describe('Notification of appointment rescheduling', function() {
    it(`S13`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU13(message_to_encode)
      encoded_message.should.be.equal('s13')
      done()
    })
  })

  describe('Notification of appointment modification', function() {
    it(`S14`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU14(message_to_encode)
      encoded_message.should.be.equal('s14')
      done()
    })
  })

  describe('Notification of appointment cancellation', function() {
    it(`S15`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU15(message_to_encode)
      encoded_message.should.be.equal('s15')
      done()
    })
  })

  describe('Notification of appointment deletion', function() {
    it(`S17`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU17(message_to_encode)
      encoded_message.should.be.equal('s17')
      done()
    })
  })

  describe('Notification that patient did not show up for scheduled appointment', function() {
    it(`S26`, (done) => {
      const message_to_encode = {}
      const encoded_message = parser.getSIU26(message_to_encode)
      encoded_message.should.be.equal('s26')
      done()
    })
  })

})
