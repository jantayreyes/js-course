'use strict';


// First class functions is just a concept.
// Higher - Order functions exists in practice.

const oneWord = function(str) {
  // Select all the white spaces with the regular expression
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return[first.toUpperCase(), ...others].join(' ');
};

// Higher Order functions
const transformer = function(str, fn) {
  console.log(`Original tring: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // Calling the propertie name on a function - which is the function's name
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Wave');
};
document.body.addEventListener('click', high5)
const name = ['Jesus', 'Alfredo', 'Solange'];
name.forEach(high5);


