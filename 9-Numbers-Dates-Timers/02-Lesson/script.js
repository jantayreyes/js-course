'use strict';

console.log(Math.sqrt(25)); // Square root
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5, 10, 23, 2));
console.log(Math.max(5, 10, 23, 2, '55')); // max does type coercion.
console.log(Math.max(5, 10, 23, 2, '55xx')); // max does not parsin.

console.log(Math.min(5, 10, 23, 2));
console.log(Math.min('5', 10, 23, '2', '55')); // min does type coercion.
console.log(Math.min('5e', 10, 23, 2, '55xx')); // min does not parsin.

console.log(Math.PI * Number.parseFloat('10px') ** 2); // Area of a circle

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(22.22));

console.log(Math.round(22.9));
console.log(Math.round(22.1));

console.log(Math.ceil(23.2)); // always round up
console.log(Math.ceil(23.9));
console.log(Math.ceil('23.9')); // does type coercion

console.log(Math.floor(23.2)); // always round down
console.log(Math.floor(23.9));
console.log(Math.floor('23.9')); // does type coercion

console.log(Math.floor(-23.2)); // better working all situations
console.log(Math.trunc(-23.2));

// Rounding decimals
console.log((2.7).toFixed(0)); // return a string toFixed
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.365).toFixed(1));