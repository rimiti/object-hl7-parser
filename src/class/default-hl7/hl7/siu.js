import Encoder from '../../encoder'
import S12Config from '../../../config/default-hl7/siu/s12-config.json'
import S13Config from '../../../config/default-hl7/siu/s13-config.json'
import S14Config from '../../../config/default-hl7/siu/s14-config.json'
import S15Config from '../../../config/default-hl7/siu/s15-config.json'
import S17Config from '../../../config/default-hl7/siu/s17-config.json'
import S26Config from '../../../config/default-hl7/siu/s26-config.json'

export default class SIU {

  constructor(message) {
    this.encoder = new Encoder(message)
  }

  getS12(config) {
    this.encoder.setConfig(config ? config : S12Config)
    return this.encoder.produceHL7Message()
  }

  getS13(config) {
    this.encoder.setConfig(config ? config : S13Config)
    return this.encoder.produceHL7Message()
  }

  getS14(config) {
    this.encoder.setConfig(config ? config : S14Config)
    return this.encoder.produceHL7Message()
  }

  getS15(config) {
    this.encoder.setConfig(config ? config : S15Config)
    return this.encoder.produceHL7Message()
  }

  getS17(config) {
    this.encoder.setConfig(config ? config : S17Config)
    return 's17'
  }

  getS26(config) {
    this.encoder.setConfig(config ? config : S26Config)
    return 's26'
  }

}
