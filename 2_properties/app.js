// const House = require("./util/House");

// const myHouse = new House("575 Pierce", true, false);

// myHouse.addToPets(["Nugget", "Kitty"]);
// myHouse.addToPets(["Chip"]);

// console.log(myHouse);

const Apartment = require("./util/Apartment");

const myApartment = new Apartment("575 Pierce", "405", "2", "1");

myApartment.addToTenants(["Jessica", "Bryan"]);
myApartment.addToPets(["Nugget", "Kitty"]);

console.log(myApartment);
