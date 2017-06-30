import DefaultEncoder from './default-hl7'

export default class Encoder {

  constructor(message, config) {
    this._message = message
    this._config = config
    this._encoder = this._setDynamicEncoder(config.format)
  }

  _setDynamicEncoder(format) {
    let obj = (format === 'hl7-2.4') ? this.setEncoder(new DefaultEncoder(this._message, this._config)) : null
    if (!obj) throw new Error(`Unknow format: ${format}`)
    return obj
  }

  _setEncoder(encoder){
    this.encoder = encoder
  }

  _produceMessage(){
    return this.encoder.produceHL7Message()
  }

}
