import parser from '../lib/parser'
import chai from 'chai'
chai.should()

describe('SIU', () => {

  describe('Notification of new appointment booking', function() {
    it(`S12`, (done) => {

      const s12 = {
        "id" : "1",
        "type": "SIU",
        "fiche": {
          "id": "23211",
          "type": "xx",
          "utc_time": "2017-21-06",
          "triggered_by": "ouss"
        },
        "appointment": {
          "id": "2131",
          "type": "xdf",
          "utc_time": "2017-21-06",
          "triggered_by": "dimitri"
        }
      }

      const obj = parser.encode(s12, {})

      done()
    })
  })

  describe('Notification of appointment rescheduling', function() {
    it(`S13`, (done) => {
      done()
    })
  })

  describe('Notification of appointment modification', function() {
    it(`S14`, (done) => {
      done()
    })
  })

  describe('Notification of appointment cancellation', function() {
    it(`S15`, (done) => {
      done()
    })
  })

  describe('Notification of appointment deletion', function() {
    it(`S17`, (done) => {
      done()
    })
  })

  describe('Notification that patient did not show up for scheduled appointment', function() {
    it(`S26`, (done) => {
      done()
    })
  })

})
