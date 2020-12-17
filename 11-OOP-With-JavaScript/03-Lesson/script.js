'use strict';

//ES6 Clases
// Class expression
// const PersonCL  = class {}

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Mehtods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`); 
  }

};

const jessica = new PersonCl('Jessica', 1999)
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);  
// };
jessica.greet();

// 1. Clases are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode