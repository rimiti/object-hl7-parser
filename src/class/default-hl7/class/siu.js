import HL7 from './hl7'

export default class SIU extends HL7 {

  constructor() {
    super()
  }

  produceMessage() {
    return 'test-siu'
  }

}
