import Encoder from './encoder'

let configuration

export default {

  /**
   * @description Configure usage
   * @param config
   */
  configure: (config) => configuration = config,

  /**
   * @description Encoder message with configuration
   * @param message
   * @return {Decoder}
   */
  encode: (message) => {
    let encoder = new Encoder(message, configuration.mapping)
    return encoder
  }
}
