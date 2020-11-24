'use strict';

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// FOREACH
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