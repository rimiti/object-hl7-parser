import simpleHL7 from 'simple-hl7'
import ADT from './hl7/adt'
import SIU from './hl7/siu'

export default class DefaultEncoder {

  constructor() {

  }

  getAdtEncoder(message) {
    return new ADT(message)
  }

  getSiuEncoder(message) {
    return new SIU(message)
  }

}
