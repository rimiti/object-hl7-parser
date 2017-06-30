
export default class SIU extends HL7 {

  constructor() {
    super()
  }

  produceMessage() {
    let adt_message = this._createHeader()
  }

}
