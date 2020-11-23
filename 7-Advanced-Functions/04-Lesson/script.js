'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
};

const greeterHey = greet('Hey');
greeterHey('Jesus');
greeterHey('Steven');

greet('Hello')('Jesus');

// Arrow functions
const waves = (greeting ) => (name) => console.log(`${greeting} ${name}`);

waves('Hallo')('Jesus');

const greeterWave = waves('Nice to see you');
greeterWave('Laura');
greeterWave('Robert');