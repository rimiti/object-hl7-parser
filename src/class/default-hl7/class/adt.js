
export default class ADT extends HL7 {

  constructor() {
    super()
  }

  produceMessage() {
    let adt_message = this._createHeader()
  }

}
