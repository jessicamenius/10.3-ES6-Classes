const Property = require("./Property");

class House extends Property {
  constructor(address, fYard, bYard) {
    super(address);
    this.fYard = fYard;
    this.bYard = bYard;
  }
}

module.exports = House;
