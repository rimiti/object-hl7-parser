# object-hl7-parser
[![Build Status](https://travis-ci.org/rimiti/object-hl7-parser.svg?branch=master)](https://travis-ci.org/rimiti/object-hl7-parser) [![Coverage Status](https://coveralls.io/repos/github/rimiti/object-hl7-parser/badge.svg?branch=master)](https://coveralls.io/github/rimiti/object-hl7-parser?branch=master) [![Issue Count](https://codeclimate.com/github/rimiti/object-hl7-parser/badges/issue_count.svg)](https://codeclimate.com/github/rimiti/object-hl7-parser) [![Dependency Status](https://www.versioneye.com/user/projects/5957b4f30fb24f0035d3c394/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5957b4f30fb24f0035d3c394) [![NPM version](https://badge.fury.io/js/object-hl7-parser.svg)](https://badge.fury.io/js/object-hl7-parser) [![Downloads](https://img.shields.io/npm/dt/object-hl7-parser.svg)](https://img.shields.io/npm/dt/object-hl7-parser.svg)

Convert your object into HL7 message.

# Install
```
$ npm install object-hl7-parser
```


## HL7 parsed messages:
**Adt**
```
- A04 - Patient registration
- A08 - Patient information update
- A40 - Merge patient
```

**Siu**
```
- S12 - Notification of new appointment booking
- S13 - Notification of appointment rescheduling
- S14 - Notification of appointment modification
- S15 - Notification of appointment cancellation
- S17 - Notification of appointment deletion
- S26 - Notification that patient did not show up for scheduled appointment
```


## How to use it ?

Create your hl7 mapping configuration file respecting this format. Below an example of a SIU12 configuration.

```json
// mapping/siu-12.json
{
  "format": "hl7-2.4",
  "adapter": "default",
  "delimiters": {
    "fieldSeperator": "|",
    "componentSeperator": "^",
    "subcomponentSeperator": "&",
    "escapeCharacter": "\\",
    "repititionCharacter": "~",
    "segmentSeperator": "\r"
  },
  "mappings": {
    "msh": {
      "configuration": {
        "components": {
          "count": 17,
          "seperators": [
            {"position": 5 , "numberOfSeparator": 1}
          ]
        }
      },
      "values": [
        { "field": "encoding_character", "component": [0,1], "default": "mllp_http_proxy" },
        { "field": "sending_application", "component": [1,1], "default": "proxy00-prodaz" },
        { "field": "sending_facility", "component": [2,1], "default": "mllp_http_proxypartenaire" },
        { "field": "receiving_application", "component": [3,1], "default": "proxy00-prodpartenaire" },
        { "field": "message_datetime", "component": [4,1], "default": "proxy00-prodpartenaire" },
        { "field": "security", "component": [5,1] },
        { "field": "message_type", "component": [6,1], "default": "SIU" },
        { "field": "message_type_ref", "component": [6,2], "default": "S12" },
        { "field": "message_control_id", "component": [7,1], "default": "154779" },
        { "field": "processing_id", "component": [8,1], "default": "P" },
        { "field": "version_id", "component": [9,1], "default": "2.5.1" },
        { "field": "sequence_number", "component": [10,1] },
        { "field": "continuation_pointer", "component": [11,1] },
        { "field": "accept_acknowledgment_type", "component": [12,1] },
        { "field": "application_acknowledgment_type", "component": [13,1] },
        { "field": "country_code", "component": [14,1], "default": "FRA" },
        { "field": "character_set", "component": [15,1], "default": "UTF-8" },
        { "field": "principal_language_of_message", "component": [16,1] },
        { "field": "alternate_character_set", "component": [17,1] }
      ]
    },
    "sch": {
      "configuration": {
        "components": {
          "count": 26,
          "seperators": []
        }
      },
      "values": [
        { "field": "appointment.placer_id", "component": [0,1] },
        { "field": "appointment.filler_id", "component": [1,1] },
        { "field": "appointment.occurence_number", "component": [2,1] },
        { "field": "appointment.placer_group_number", "component": [3,1] },
        { "field": "appointment.schedule_id", "component": [4,1] },
        { "field": "appointment.event_reason", "component": [5,1] },
        { "field": "appointment.appointment_reason", "component": [6,1] },
        { "field": "appointment.appointment_type", "component": [7,1] },
        { "field": "appointment.appointment_duration", "component": [8,1] },
        { "field": "appointment.appointment_duration_unit", "component": [9,1] },
        { "field": "appointment.timing", "children": [
            { "field": "date", "component": [10,4] },
            { "field": "duration", "component": [10,3] }
          ]
        },
        { "field": "appointment.placer.contacts", "children": [
            { "field": "id", "component": [11,1] },
            { "field": "firstname", "component": [11,2] },
            { "field": "lastname", "component": [11,3] }
          ]
        },
        { "field": "appointment.placer_contact_phone", "component": [12,1] },
        { "field": "appointment.placer_contact_address", "component": [13,1] },
        { "field": "appointment.placer_contact_location", "component": [14,1] },
        { "field": "appointment.filler.contacts", "children": [
            { "field": "id", "component": [15,1] },
            { "field": "firstname", "component": [15,2] },
            { "field": "lastname", "component": [15,3] }
          ]
        },
        { "field": "appointment.filler_contact_phone", "component": [16,1] },
        { "field": "appointment.filler_contact_address", "component": [17,1] },
        { "field": "appointment.filler_contact_location", "component": [18,1] },
        { "field": "appointment.entred_by.name", "component": [19,1] },
        { "field": "appointment.entred_by_contact_phone", "component": [20,1] },
        { "field": "appointment.entred_by_contact_location", "component": [21,1] },
        { "field": "appointment.parent_placer_appointment_id", "component": [22,1] },
        { "field": "appointment.parent_filler_appointment_id", "component": [23,1] },
        { "field": "appointment.filler_status_code", "component": [24,1], "default": "Booked" }
      ]
    },
    "pid": {
      "configuration": {
        "components": {
          "count": 14,
          "seperators": [
          ]
        }
      },
      "values": [
        { "field": "fiche.set_id", "component": [0,1] },
        { "field": "fiche.patient_id", "component": [1,1] },
        { "field": "fiche.id", "component": [2,1] },
        { "field": "fiche.check_digit", "component": [2,2] },
        { "field": "fiche.code_check_digit", "component": [2,3] },
        { "field": "fiche.assigning_authority", "component": [2,4], "default": "ODS" },
        { "field": "fiche.identifier_type_code", "component": [2,5] },
        { "field": "fiche.unique_identifier_patient", "component": [2,6], "default": "PI" },
        { "field": "fiche.alternate_patient_id" , "component": [3,1] },
        { "field": "fiche.lastname" , "component": [4,2] },
        { "field": "fiche.firstname" , "component": [4,1] },
        { "field": "fiche.middlename" , "component": [4,3] },
        { "field": "fiche.suffix" , "component": [4,4] },
        { "field": "fiche.prefix" , "component": [4,5] },
        { "field": "fiche.degree" , "component": [4,6] },
        { "field": "fiche.name_type_code", "component": [4,7], "default": "L" },
        { "field": "fiche.mother_maiden_name", "component": [5,1] },
        { "field": "fiche.date_of_birth", "component": [6,1] },
        { "field": "fiche.sex", "component": [7,1] },
        { "field": "fiche.patient_alias", "component": [8,1] },
        { "field": "fiche.race", "component": [9,1] },
        { "field": "fiche.address",
          "children": [
            {"field": "street", "component": [10,1] },
            {"field": "street_2", "component": [10,2] },
            {"field": "city", "component": [10,3] },
            {"field": "state", "component": [10,4] },
            {"field": "zipcode", "component": [10,5] },
            {"field": "country", "component": [10,6] },
            {"field": "address_type", "component": [10,7] },
            {"field": "other_geographic_designation", "component": [10,8] },
            {"field": "country_code", "component": [10,9] },
            {"field": "census_tract", "component": [10,10] }
          ]
        },
        { "field": "fiche.country_code", "component": [11,1] },
        { "field": "fiche.contacts", "type":"array",
          "children": [
            {"field": "number", "component": [12,1] },
            {"field": "telecommunication_use_code", "component": [12,2] },
            {"field": "telecommunication_equipment_code", "component": [12,3] },
            {"field": "email", "component": [12,4] },
            {"field": "country_code", "component": [12,5] },
            {"field": "area_code", "component": [12,6] },
            {"field": "phone_number", "component": [12,7] },
            {"field": "extension", "component": [12,8] }
          ]
        }
      ]
    },
    "rgs": {
      "configuration": {
        "components": {
          "count": 1,
          "seperators": []
        }
      },
      "values": [
        { "field": "ressource_group.set_id", "component": [0,1] },
        { "field": "ressource_group.action_code", "component": [1,1] },
        { "field": "ressource_group.group_id", "component": [2,1] }
      ]
    },
    "aig": {
      "configuration": {
        "components": {
          "count": 4,
          "seperators": []
        }
      },
      "values": [
        { "field": "general_ressource.set_id", "component": [0,1] },
        { "field": "general_ressource.segment_action_code", "component": [1,1] },
        { "field": "general_ressource.ressource_id", "component": [2,1] },
        { "field": "general_ressource.ressource_type", "component": [3,1] },
        { "field": "general_ressource.ressource_group", "component": [4,1] },
        { "field": "general_ressource.ressource_quantity", "component": [5,1] },
        { "field": "general_ressource.ressource_quantity_unit", "component": [6,1] },
        { "field": "general_ressource.start_date_time", "component": [7,1] },
        { "field": "general_ressource.start_time_offset", "component": [8,1] },
        { "field": "general_ressource.start_time_offset_unit", "component": [9,1] },
        { "field": "general_ressource.duration", "component": [10,1] },
        { "field": "general_ressource.duration_unit", "component": [11,1] },
        { "field": "general_ressource.allow_substitution_code", "component": [12,1] },
        { "field": "general_ressource.filler_status_code", "component": [13,1] }
      ]
    },
    "nte": {
      "configuration": {
        "components": {
          "count": 3,
          "seperators": []
        }
      },
      "values": [
        { "field": "comments.set_id", "component": [0,1] },
        { "field": "comments.source", "component": [1,1] },
        { "field": "comments.comment", "component": [2,1] },
        { "field": "comments.comment_type", "component": [3,1] }
      ]
    }
  }
}
```

Import your parser and set your configuration as parameter.

```js
import parser from 'object-hl7-parser'
import siu12Config from './mapping/siu-12.json'

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
      "email": "dimitri.dobairro@dimsolution.com"
    }, {
      "number": "0200000000"
    }]
  },
  "appointment": {
    "filler_id": "49849903800^DimSolution",
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

const getSIU12 = parser.getSIU12(message_to_encode, siu12Config)

// If you want a stringified output
console.log(getSIU12.getMessage())

// If you want an object output
// console.log(getSIU12.getObject())
```

Output message:
```
MSH|^~\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S12|154779|P|2.5.1|||||FRA|UTF-8|
SCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|
PID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|
RGS|1
AIG|1|||10101041431@750057689
NTE|||Mon commentaire
```


Available methods on the parser:

    - getADT04(message, config)
    - getADT08(message, config)
    - getADT40(message, config)
    - getSIU12(message, config)
    - getSIU13(message, config)
    - getSIU14(message, config)
    - getSIU15(message, config)
    - getSIU17(message, config)
    - getSIU26(message, config)



## Tests
```js
// Run tests
npm run test
```

## Related packages
Convert your HL7 message to an object ([object-hl7-parser](https://github.com/rimiti/hl7-object-parser) ).


## License
MIT © [Dimitri DO BAIRRO](https://dimsolution.com)
