import simpleHL7 from 'simple-hl7'
import SIU from './class/siu'
import ADT from './class/adt'

export default class DefaultHL7Encoder {

  constructor(message, config) {
    this.message = message
    this.config = config
    this.setDynamicEncoder()
  }

  setDynamicEncoder() {
    if (message.type === 'SIU') { this.setEncoder(new SIU()) }
    else if (message.type === 'ADT') { this.setEncoder(new ADT()) }
    else throw new Error("unsupported type message")
  }

  setEncoder(encoder) {
    this.encoder = encoder;
  }

  produceHL7Message(){
    return this.encoder.produceMessage()
  }

}
