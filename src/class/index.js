import DefaultEncoder from './default-hl7'

let encoder

export default {

  configure: (config) => {
    if (config.version === 'hl7-2.4') {
      return encoder = new DefaultEncoder()
    }
    throw new Error(`Unknown format: ${config.version}`)
  },

  getADT04: (message) => {
    return encoder.getAdtEncoder(message).getA04()
  },

  getADT08: (message) => {
    return encoder.getAdtEncoder(message).getA08()
  },

  getADT40: (message) => {
    return encoder.getAdtEncoder(message).getA40()
  },

  getSIU12: (message) => {
    return encoder.getSiuEncoder(message).getS12()
  },

  getSIU13: (message) => {
    return encoder.getSiuEncoder(message).getS13()
  },

  getSIU14: (message) => {
    return encoder.getSiuEncoder(message).getS14()
  },

  getSIU15: (message) => {
    return encoder.getSiuEncoder(message).getS15()
  },

  getSIU17: (message) => {
    return encoder.getSiuEncoder(message).getS17()
  },

  getSIU26: (message) => {
    return encoder.getSiuEncoder(message).getS26()
  }
}
