'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// FOREACH
// Arrays
console.log('----- FOR -----');
// for(const movement of movements) {
for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
};

console.log('----- FOREACH -----');
movements.forEach(function (mov, i, arr) {
  // console.log(arr);
  if(mov > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// Maps
console.log('----- FOR EACH MAPS -----');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
console.log('----- FOR EACH SETS -----');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

// The argument key does not make sense, but we let it because it is easier to understand. 
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${_}: ${value}`);
});
// _ it is a convention to say a variable is completely unnecesaary.
