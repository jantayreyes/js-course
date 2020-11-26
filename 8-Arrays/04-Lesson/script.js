'use strict';

// Filter
const movements = [200, 450, -400, 3000, -650, -130, 70, -1300, 255, 212, -1212];

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
// In the callback function, the first paramether is the accumulator
// The reduce method has a second paramater which is the accumulator starts.
const balance = movements.reduce(function(acc, mov, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + mov
}, 0);
console.log(balance);

// for-of
let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
// const maximumValue = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc
//   } else {
//     return mov;
//   }
// }, movements[0])

const maximumValue = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);
console.log(maximumValue);