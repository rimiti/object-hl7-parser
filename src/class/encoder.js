import DefaultEncoder from './default-hl7'

export default class Encoder {

  constructor(message, config) {
    this._message = message
    this._config = config
    this._setDynamicVersionEncoder(config.format)
  }

  _setDynamicVersionEncoder(format) {
    if (format === 'hl7-2.4') {
      this._setEncoder(new DefaultEncoder(this._message, this._config))
    } else {
      throw new Error(`Unknown format: ${format}`)
    }
  }

  _setEncoder(encoder){
    this.encoder = encoder
  }

  produceHL7Message(){
    return this.encoder.produceHL7Message()
  }

}
