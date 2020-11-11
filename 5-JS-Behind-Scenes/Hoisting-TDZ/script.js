'use strict';
// Variables
// console.log(me); => undefined
// console.log(job); => TDZ - cannot access 'job' before initialization
// comsole.log(year); => TDZ - cannot access 'year' before initialization

var me = 'Jesus';
let job = 'Web Developer¡';
const year = 1995;

//Functions
console.log(addDecl(1, 2)); // it works 
// console.log(addExpre(3, 4)); // Works in the same way that variables
// console.log(addArr(5, 6)); // addaRR IS NOT A FUNCTION

function addDecl(a, b) {
  return a + b;
};

const addExpre = function(a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

// Example
if(numProducts) deleteShoppingCar(); // This will execute deleteShoppingCar, because in this moment numProducts is undefined, because we are using var to declare the variable numProducts. That's the main reason why we should not use var.

var numProducts =  10;

function deleteShoppingCar() {
  console.log('All products deleted');  
}

var x = 1; // variables declared with var will create a property on the flobal window object and that would have some implications on some cases.
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false