'use strict';

console.log(23 === 23.0);

// Base 10 - 0 to 9 => 1/10 = 0.1, 3/10 = 3.33333333
// Binary Base 2 - 0 and 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // False, we have to accept in JS.

// String to Number
console.log(Number('23')); 
console.log(+'23');

// Parsing
console.log(Number.parseInt('38px'));
console.log(Number.parseInt('x38px')); // Not number
console.log(Number.parseInt('38px', 10)); // second parameter the base.

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

console.log(parseFloat('2.5rem')); // Old way, now you should call Number first.

// If a value is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x'));  // true
console.log(Number.isNaN(23 / 0)); // infinity = false

// If a value is a number, a real number - working with decimal
console.log(Number.isFinite(20)); // true 
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x'));  // false
console.log(Number.isFinite(23 / 0)); // infinity = true

// If a value is a number, without decimals.
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(22.5)); // false

