const Property = require("./Property");

class Apartment extends Property {
  constructor(address, unit, bedrooms, bathrooms) {
    super(address);
    this.unit = unit;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
}

module.exports = Apartment;
