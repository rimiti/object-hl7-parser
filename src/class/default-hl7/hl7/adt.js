import Encoder from '../../encoder'
import A04Config from '../../../config/default-hl7/adt/a04-config.json'
import A08Config from '../../../config/default-hl7/adt/a08-config.json'
import A40Config from '../../../config/default-hl7/adt/a40-config.json'

export default class ADT {

  constructor(message) {
    this.encoder = new Encoder(message)
  }

  getA04() {
    this.encoder.setConfig(A04Config)
    return this.encoder.produceHL7Message()
  }

  getA08() {
    this.encoder.setConfig(A08Config)
    return 'a08'
  }

  getA40() {
    this.encoder.setConfig(A40Config)
    return 'a40'
  }

}
