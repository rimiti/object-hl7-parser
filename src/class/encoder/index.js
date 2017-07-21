import simpleHL7 from 'simple-hl7'

export default class Encoder {

  constructor(message_to_encode) {
    this.message_to_encode = message_to_encode
  }

  setConfig(config) {
    this.config = config
  }

  getObject() {
    for (let key in this.config.mappings) {
      this._createSegment(key, this.config.mappings[key])
    }
    return this.hl7_message
  }

  getMessage() {
    for (let key in this.config.mappings) {
      this._createSegment(key, this.config.mappings[key])
    }
    return this.hl7_message.log()
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
        return (f.component && f.component[0] === component_index) || (f.children && f.children.filter((child) => { return child.component[0] === component_index }).length > 0)
      })
      let fields_content = []
      let field_repetitive_content = []
      if (fields.length > 0) {
        for (let i = 0; i < fields.length; i++) {
          if(!fields[i].children) {
            fields_content[fields[i].component[1] - 1] = this._getFieldContent(this.message_to_encode, fields[i])
          } else {
            if (this._deepFind(this.message_to_encode, fields[i].field) && fields[i].type != 'array') {
              for (let rep = 0; rep < fields[i].children.length; rep++) {
                fields_content[fields[i].children[rep].component[1] - 1] = this._getFieldContent(this._deepFind(this.message_to_encode, fields[i].field), fields[i].children[rep])
              }
            } else if (this._deepFind(this.message_to_encode, fields[i].field)) {
              for (let index_child = 0; index_child < this._deepFind(this.message_to_encode, fields[i].field).length; index_child++) {
                let field_content_occurence = []
                for (let rep = 0; rep < fields[i].children.length; rep++) {
                  field_content_occurence[fields[i].children[rep].component[1] - 1] = this._getFieldContent(this._deepFind(this.message_to_encode, fields[i].field)[index_child], fields[i].children[rep])
                }
                field_repetitive_content.push(field_content_occurence.join(this.config.delimiters.componentSeperator))
              }
            }
          }
        }
        segment_arguments.push((field_repetitive_content.length === 0) ? fields_content.join(this.config.delimiters.componentSeperator) : field_repetitive_content.join("~"))
      } else {
        segment_arguments.push(this.config.delimiters.componentSeperator.repeat((numberOfSeparatorInsideComponent) ? numberOfSeparatorInsideComponent.numberOfSeparator : 0))
      }
    }
    return segment_arguments
  }

  _getFieldContent(object, fieldConfig) {
    let field_content

    if (this._deepFind(object, fieldConfig.field)) {
      field_content = this._deepFind(object, fieldConfig.field)
    } else if (fieldConfig.default) {
      field_content = fieldConfig.default
    }

    return field_content
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
