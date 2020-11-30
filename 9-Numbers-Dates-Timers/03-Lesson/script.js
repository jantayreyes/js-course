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

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('movements__row')].forEach(function(row, i) {
    // 0, 2 ,4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
  })
  // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
});

