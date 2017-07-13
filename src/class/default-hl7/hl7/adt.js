import Encoder from '../../encoder'
import A04Config from '../../../config/default-hl7/adt/a04-config.json'
import A08Config from '../../../config/default-hl7/adt/a08-config.json'
import A40Config from '../../../config/default-hl7/adt/a40-config.json'

export default class ADT {

  constructor(message) {
    this.encoder = new Encoder(message)
  }

  getA04(config) {
    this.encoder.setConfig(config ? config : A04Config)
    return this.encoder.produceHL7Message()
  }

  getA08(config) {
    this.encoder.setConfig(config ? config : A08Config)
    return this.encoder.produceHL7Message()
  }

  getA40(config) {
    this.encoder.setConfig(config ? config : A40Config)
    return this.encoder.produceHL7Message()
  }

}
