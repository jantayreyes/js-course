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

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice - Does not mutate the original array, instead create a new one
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // end parameter is not included.
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice()); // Creating a shallow copy of the array
console.log([...arr]); // Creating a shallow copy of the array

// Splice - Does mutate the original array
// console.log(arr.splice(2));
arr.splice(-1); // Remove 'e' from arr.
console.log(arr);
arr.splice(1, 2)
console.log(arr);

// Reverse - Does mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); 
console.log(arr2);

// Concact - Does not mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join - Does not mutate the origin array
console.log(letters.join(' - '));
console.log(letters);