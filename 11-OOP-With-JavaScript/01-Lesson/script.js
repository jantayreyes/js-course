'use strict';

// Constructor functions

// Blueprint - to create houses.
const Person = function(firstName, birthYear) {
  // Instances properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  //   console.log(2020 - this.birthYear)
  // };

};

// actual houses - instances
const jesus = new Person('Jesus', 1995);
const sol = new Person('Sol', 1993)
console.log(jesus);
console.log(sol);

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const robert = 'Robert'
console.log(jesus instanceof Person);
console.log(robert instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear)
};

jesus.calcAge();
sol.calcAge();

console.log(jesus.__proto__);
console.log(jesus.__proto__ === Person.prototype);  

console.log(Person.prototype.isPrototypeOf(jesus));
console.log(Person.prototype.isPrototypeOf(sol));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jesus, sol);
console.log(jesus.species, sol.species);

// Own properties only can be declared in the object itself.
console.log(jesus.hasOwnProperty('firstName'));
console.log(jesus.hasOwnProperty('species'));