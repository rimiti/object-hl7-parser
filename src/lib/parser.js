import DefaultEncoder from '../class/default-hl7'

let encoder = new DefaultEncoder()

export function configure(config) {
  if (config.version === 'hl7-2.4') return encoder = new DefaultEncoder()
  throw new Error(`Unknown format: ${config.version}`)
}

export function getADT04(message, config) {
  return encoder.getAdtEncoder(message).getA04(config)
}

export function getADT08(message, config) {
  return encoder.getAdtEncoder(message).getA08(config)
}

export function getADT40(message, config) {
  return encoder.getAdtEncoder(message).getA40(config)
}

export function getSIU12(message, config) {
  return encoder.getSiuEncoder(message).getS12(config)
}

export function getSIU13(message, config) {
  return encoder.getSiuEncoder(message).getS13(config)
}

export function getSIU14(message, config) {
  return encoder.getSiuEncoder(message).getS14(config)
}

export function getSIU15(message, config) {
  return encoder.getSiuEncoder(message).getS15(config)
}

export function getSIU17(message, config) {
  return encoder.getSiuEncoder(message).getS17(config)
}

export function getSIU26(message, config) {
  return encoder.getSiuEncoder(message).getS26(config)
}
