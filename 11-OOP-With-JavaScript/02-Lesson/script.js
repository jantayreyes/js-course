'use strict';

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jesus = new Person('Jesus', 1995);
const sol = new Person('Sol', 1993)
console.log(jesus);
console.log(sol);

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear)
};

Person.prototype.species = 'Homo Sapiens';

// Prototype chain
console.log(jesus.__proto__);

// object.prototype (top of prototype chain)
console.log(jesus.__proto__.__proto__); 
console.log(jesus.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor); // the function itself
console.dir(Person.prototype.constructor); 

const arr = [3, 2, 3, 4, 5, 6, 9, 3, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);

console.log(arr.__proto__.__proto__);

// Create a new method to the prototype property of the array constructor
Array.prototype.unique = function() {
  return [...new Set(this)]
};

console.log(arr.unique());

const h1 =  document.querySelector('h1');
console.dir(h1);