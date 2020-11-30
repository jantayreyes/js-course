'use strict';

// Remainder Operator
console.log(5 % 2);
console.log(8 % 3);

console.log(6 % 2);
console.log(7 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(5));
console.log(isEven(47));

// We have a NodeList, that's why we use spread operator to conver into an array.

// labelBalance.addEventListener('click', function() {
//   [...document.querySelectorAll('movements__row')].forEach(function(row, i) {
//     0, 2 ,4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   })
//     10, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
// });

// BigInt
console.log(2 ** 53 - 1); // Biggest number that JS can safely represent.
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // Not correct.
console.log(2 ** 53 + 2); // Not correct.
console.log(2 ** 53 + 3); // Not Correct.

console.log(43333333333293292399239999999999999940032402034n); // BigInt number.
console.log(BigInt(4333333333329329));

// Operations
console.log(10000n + 10000n) 
console.log(1222222222222222222233n * 10000000n) 
// console.log(Math.sqrt(16n)); Does not work

const huge = 1293913923929392323234n
const num =  23;
// You can not mix regular number with BigInts, you must transform them first.
console.log(huge * BigInt(num));

console.log(22n > 10); // works true
console.log(20n === 20); // The equality operator does not do type coercion.
console.log(typeof 20n, typeof 20);
console.log(20n == 20); // Regular equality operator does do type coercion.
console.log(20n == '20'); // Regular equality operator does do type coercion.

console.log(huge + ' is REALLY big');

// Divisions
console.log(10n / 3n); // return the closest bigInt
console.log(11n / 3n)  
console.log(10 / 3);





