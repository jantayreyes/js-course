'use strict';

// Primitive values 
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // 31
console.log(oldAge); // 30

// Objects/Reference values
const me = {
  name: 'Jesus',
  age: 25,
}

const friend = me;
friend.age = 27;

console.log('Friend', friend);
// { name: 'Jonas', age: 27 }
console.log('Me', me);
// { name: 'Jonas', age: 27 }


// Examples - Primite types
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Examples - Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 30,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {} - does not work

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 30,
  family: ['Sol', 'Alfredo', 'Aynee']
};

const jessicaCopy = Object.assign({}, jessica2); //Only works on superficial, because object.assing only creastes a shallow copy
jessicaCopy.lastName = 'Reyes';
console.log('Before marriage:', jessica2);
// { firstNmae: 'Jessica', lastName: 'Williams', age: 30 }
console.log('After marriage:', jessicaCopy);
// { firstNmae: 'Jessica', lastName: 'Reyes', age: 30 }

jessicaCopy.family.push('Robert');
jessicaCopy.family.push('John');
// In this case does not work because we are trying to work on one object which is inside of an other object, and for that object.assign does not work.
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);