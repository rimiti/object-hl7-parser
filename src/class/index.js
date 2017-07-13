import DefaultEncoder from './default-hl7'

let encoder

export default {

  configure: (config) => {
    if (config.version === 'hl7-2.4') {
      return encoder = new DefaultEncoder()
    }
    throw new Error(`Unknown format: ${config.version}`)
  },

  getADT04: (message, config) => {
    return encoder.getAdtEncoder(message).getA04(config)
  },

  getADT08: (message, config) => {
    return encoder.getAdtEncoder(message).getA08(config)
  },

  getADT40: (message, config) => {
    return encoder.getAdtEncoder(message).getA40(config)
  },

  getSIU12: (message, config) => {
    return encoder.getSiuEncoder(message).getS12(config)
  },

  getSIU13: (message, config) => {
    return encoder.getSiuEncoder(message).getS13(config)
  },

  getSIU14: (message, config) => {
    return encoder.getSiuEncoder(message).getS14(config)
  },

  getSIU15: (message, config) => {
    return encoder.getSiuEncoder(message).getS15(config)
  },

  getSIU17: (message, config) => {
    return encoder.getSiuEncoder(message).getS17(config)
  },

  getSIU26: (message, config) => {
    return encoder.getSiuEncoder(message).getS26(config)
  }
}
