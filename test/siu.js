import parser from '../lib/parser'
import chai from 'chai'
chai.should()

describe('SIU', () => {

  describe('Notification of new appointment booking', function() {
    it(`S12`, (done) => {
      const s12 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S12|154779|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
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
        },
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },

        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU12(message_to_encode)
      encoded_message.log().should.be.equal(s12)
      done()
    })
  })

  describe('Notification of appointment rescheduling', function() {
    it(`S13`, (done) => {
      const s13 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S13|154779|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
      const message_to_encode = {
        "message_datetime": "20160923155836",
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
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
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },
        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU13(message_to_encode)
      encoded_message.log().should.be.equal(s13)
      done()
    })
  })

  describe('Notification of appointment modification', function() {
    it(`S14`, (done) => {
      const s14 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S14|154779|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
      const message_to_encode = {
        "message_datetime": "20160923155836",
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
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
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },
        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU14(message_to_encode)
      encoded_message.log().should.be.equal(s14)
      done()
    })
  })

  describe('Notification of appointment cancellation', function() {
    it(`S15`, (done) => {
      const s15 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S15|256660|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
      const message_to_encode = {
        "message_datetime": "20161231110000",
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
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
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },
        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU15(message_to_encode)
      encoded_message.log().should.be.equal(s15)
      done()
    })
  })

  describe('Notification of appointment deletion', function() {
    it(`S17`, (done) => {
      const s17 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S17|256660|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
      const message_to_encode = {
        "message_datetime": "20161231110000",
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
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
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },
        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU17(message_to_encode)
      encoded_message.log().should.be.equal(s17)
      done()
    })
  })

  describe('Notification that patient did not show up for scheduled appointment', function() {
    it(`S26`, (done) => {
      const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\nSCH||49849903800^Clicrdv||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\nPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@clicrdv.com^^^^~0200000000^^^^^^^|\nRGS|1\nAIG|1|||10101041431@750057689\nNTE|||Mon commentaire`
      const message_to_encode = {
        "message_datetime": "20161231110000",
        "appointment": {
          "filler_id": "49849903800^Clicrdv",
          "event_reason": "100",
          "timing": {
            "date": "20161231110000",
            "duration": "30"
          },
          "filler": {
            "contacts": {
              "id": "10101041431",
              "firstname": "KAYSSIEH",
              "lastname": "BASSEL"
            }
          },
          "entred_by": {
            "name": "ODS"
          }
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
        },
        "general_ressource": {
          "set_id": "1",
          "ressource_type": "10101041431@750057689"
        },
        "ressource_group": {
          "set_id": "1"
        },
        "comments": {
          "set_id": "",
          "source": "",
          "comment": "Mon commentaire",
          "comment_type": ""
        }
      }
      const encoded_message = parser.getSIU26(message_to_encode)
      encoded_message.log().should.be.equal(s26)
      done()
    })
  })

})
