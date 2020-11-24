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