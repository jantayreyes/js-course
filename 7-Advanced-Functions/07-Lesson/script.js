'use strict';

// Sometines we need run functions just one time. After that, we need to delete/disable.
const runOnce = function() {
  console.log("This will never run again");
};
runOnce();


// Wrapping a function into parenthesis, it will be said that is a proper function to JS. For that reason we can run the function
(function () {
  console.log("This will never run again");
})();
//Puting parenthesis at the end of the function will call it for once.

(() => console.log("Also never run again"))();

{
  const isPrivate = 23;
  var noPrivate = 40;
}

// console.log(isPrivate);
console.log(noPrivate);


// CLOSURES
const secureBooking =  function() {
  let passengerCount =  0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

booker();

// Example 1
let f;
const g =  function() {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
};

g();
f();
console.dir(f);
// Re-assigning function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  
  setTimeout(function(){
    console.log(`Will are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000) // two arguments, first a function to be executed and the second the time in miliseconds.


  console.log(`Will start boarding in ${wait} seconds`);
};

// The closure even has priority over the scope chain.
const perGroup = 1000;
boardPassengers(180, 3);