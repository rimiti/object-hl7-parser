import simpleHL7 from 'simple-hl7'

export default class Encoder {

  constructor(message_to_encode) {
    this.message_to_encode = message_to_encode
  }

  setConfig(config) {
    this.config = config
  }

  produceHL7Message() {
    for (let key in this.config.mappings) {
      this._createSegment(key, this.config.mappings[key])
    }
    return this.hl7_message
  }

  _createSegment(segmentName, segmentConfig) {
    let args = this._createContent(segmentName, segmentConfig)
    if (!this.hl7_message) {
      args.shift()
      this.hl7_message = new simpleHL7.Message(...args)
      this.hl7_message.header.delimiters = this.config.delimiters
    } else {
      this.hl7_message.addSegment(...args)
    }
  }

  _createContent(segmentName, segmentConfig) {
    let segment_arguments = []
    segment_arguments.push(segmentName.toUpperCase())
    for (let component_index = 0; component_index < segmentConfig.configuration.components.count; component_index++) {
      let numberOfSeparatorInsideComponent = segmentConfig.configuration.components.seperators.filter((component) => {
        return component.position === component_index
      })[0]

      let fields = segmentConfig.values.filter((f) => {
        return f.component[0] === component_index
      })
      let fields_content = []
      if (fields.length > 0) {
        for (let i = 0; i < fields.length; i++) {
          if (this._deepFind(this.message_to_encode, fields[i].field)) {
            fields_content[fields[i].component[1] - 1] = this._deepFind(this.message_to_encode, fields[i].field)
          } else if (fields[i].default) {
            fields_content[fields[i].component[1] - 1] = fields[i].default
          }
        }
        segment_arguments.push(fields_content.join(this.config.delimiters.componentSeperator))
      } else {
        segment_arguments.push(this.config.delimiters.componentSeperator.repeat((numberOfSeparatorInsideComponent) ? numberOfSeparatorInsideComponent.numberOfSeparator : 0))
      }
    }
    return segment_arguments
  }

  _deepFind(obj, path) {
    let paths = path.split('.')
    let current = obj

    for (let i = 0; i < paths.length; ++i) {
      if (!current[paths[i]]) {
        return null
      } else {
        current = current[paths[i]]
      }
    }
    return current
  }
}
