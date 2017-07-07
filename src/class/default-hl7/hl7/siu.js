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

  getS12() {
    this.encoder.setConfig(S12Config)
    return 's12'
  }

  getS13() {
    this.encoder.setConfig(S13Config)
    return 's13'
  }

  getS14() {
    this.encoder.setConfig(S14Config)
    return 's14'
  }

  getS15() {
    this.encoder.setConfig(S15Config)
    return 's15'
  }

  getS17() {
    this.encoder.setConfig(S17Config)
    return 's17'
  }

  getS26() {
    this.encoder.setConfig(S26Config)
    return 's26'
  }

}
