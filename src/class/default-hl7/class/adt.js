import HL7 from './hl7'

export default class ADT extends HL7 {

  constructor() {
    super()
  }

  produceMessage() {
    return 'test-adt'
  }

}
