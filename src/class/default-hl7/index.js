import simpleHL7 from 'simple-hl7'

export default class DefaultHL7Encoder {

  constructor(message_to_encode, config) {
    this.message_to_encode = message_to_encode
    this.config = config
    this._produceHL7Message()
  }

  _produceHL7Message() {

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

    for (let segment_index = 0; segment_index < segmentConfig.configuration.components.numberOfSeparatorInsideSegment.length; segment_index++) {
      let numberOfSeparatorInsideSegment = segmentConfig.configuration.components.numberOfSeparatorInsideSegment[segment_index]

      let fields = segmentConfig.values.filter(function(f) { return f.component[0] == segment_index})
      let fields_content = []
      if (fields.length > 0) {
        for (let i = 0; i < fields.length; i++) {
          fields_content[fields[i].component[1] - 1] = this._deepFind(this.message_to_encode, fields[i].field)
        }
        segment_arguments.push(fields_content.join(this.config.delimiters.componentSeperator))
      } else {
        segment_arguments.push(this.config.delimiters.componentSeperator.repeat(numberOfSeparatorInsideSegment))
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
