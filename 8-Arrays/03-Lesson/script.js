'use strict';

// MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, -1300, 255, 212, -121212];
const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

// for
const movementsUSDfor = []
for(const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd)
};
console.log(movementsUSDfor);

// arrow - map
const movementUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementUSDarrow);

const movementsDescriptions = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} 
  ${Math.abs(mov)}`
);
console.log(movementsDescriptions);