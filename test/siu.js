import test from 'ava'
import * as parser from '../src/lib/parser'

test(`S12 - Notification of new appointment booking`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s12)
})

test(`S13 - Notification of appointment rescheduling`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s13)
})

test(`S14 - Notification of appointment modification`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s14)
})

test(`S15 - Notification of appointment cancellation`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s15)
})

test(`S17 - Notification of appointment deletion`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s17)
})

test(`S26 - Notification that patient did not show up for scheduled appointment`, t => {
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
      }, {
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
  t.is(encoded_message.getMessage(), s26)
})
