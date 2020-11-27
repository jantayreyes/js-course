'use strict';

// PIPELINE
const movements = [200, 450, -400, 3000, -650, -130, 70, -1300, 255, 212, -1212];

// The Magic of Chaining Methods
const eurToUsd = 1.1;

const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// Find
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// Find
const accounts = [account1, account2, account3, account4];

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);

for(const account of accounts) {
  if (account.owner === 'Sarah Smith'){
    console.log(account);
  }
};

// Some
console.log(movements);
console.log(movements.includes(-100130)); // Equality

const anyDeposits = movements.some(mov => mov > 5000); // Condition
console.log(anyDeposits);
console.log(movements.some(mov => mov === -130));

// Every
console.log(account4.movements.every(mov => mov > 0)); // true
console.log(account2.movements.every(mov => mov > 0)); // false

// Separated callback
const deposit = mov => mov > 0;
console.log(movements);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
