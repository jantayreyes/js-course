'use strict';

// Constructor functions

// Blueprint - to create houses.
const Person = function(fisrtName, birthYear) {
  // Instances properties
  this.fisrtName = fisrtName;
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