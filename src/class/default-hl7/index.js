import simpleHL7 from 'simple-hl7'
import SIU from './class/siu'
import ADT from './class/adt'

export default class DefaultHL7Encoder {

  constructor(message, config) {
    this.message = message
    this.config = config
    this._setDynamicTypeEncoder()
  }

  _setDynamicTypeEncoder() {
    if (this.message.type === 'SIU') { this._setEncoder(new SIU()) }
    else if (this.message.type === 'ADT') { this._setEncoder(new ADT()) }
    else throw new Error("unsupported type message")
  }

  _setEncoder(encoder) {
    this.encoder = encoder;
  }

  produceHL7Message() {
    return this.encoder.produceMessage()
  }

}
