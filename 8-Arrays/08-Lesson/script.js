'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, -1300, 255, 212, -1212];

const labelBalance = document.querySelector('.balance__value');

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

const accounts = [account1, account2, account3, account4];

// Creating arrays
const x = new Array(7);
console.log(x);

// Fill
// x.fill(1)
// x.fill(2, 3)
x.fill(2, 3, 5)
console.log(x);

console.log(movements);
movements.fill(23, 4, 8)
console.log(movements);

// Array.from()---------Map method.
// const y = [1, 1, 1, 1, 1, 1, 1]
const y = Array.from({length: 7}, () => 1);
console.log(y);

// const z = [1, 2, 3, 4, 5, 6, 7] => the underscore is the throw away parameter. In this case we do not want the first parameter. 
const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

// EXAMPLE, ARRAY WITH 100 RANDOMS DICES
const dice = Array.from({length: 100}, () => Math.floor((Math.random() * 100) + 1));
console.log(dice);
dice.sort((a, b) =>  a - b);
console.log(dice);

// NodeList to real Array
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from
//     (
//     document.querySelector.call('.movements__value'), First parameter
//     el => Number(el.textContent.replace('€', '')) Second parameter
//     );
//    It works because we transfrom de NodeList to a proper array.
//   console.log(movementsUI);
// });
