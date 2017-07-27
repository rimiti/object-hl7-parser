import ADT from './hl7/adt'
import SIU from './hl7/siu'

export default class DefaultEncoder {

  getAdtEncoder(message) {
    return new ADT(message)
  }

  getSiuEncoder(message) {
    return new SIU(message)
  }

}
