class Property {
  constructor(address) {
    this.address = address;
    this.tenants = [];
    this.pets = [];
  }

  addToPets(arr) {
    this.pets = [...this.pets, ...arr];
  }

  addToTenants(arr) {
    this.tenants = [...this.tenants, ...arr];
  }
}

// const myPlace = new Property("575 Pierce");
// console.log(myPlace);

// addToPets array with spread
// [dog, cat, panda, monkey]

module.exports = Property;
