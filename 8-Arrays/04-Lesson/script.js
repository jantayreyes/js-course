'use strict';

// Filter
const movements = [200, 450, -400, 3000, -650, -130, 70, -1300, 255, 212, -121212];

const deposits = movements.filter((mov, i, arr) => mov > 0);
// Just to show that we have access, index and the array too.
console.log(movements);
console.log(deposits);

// for - of
const depositFor = [];
for(const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

// Example

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

// Reduce