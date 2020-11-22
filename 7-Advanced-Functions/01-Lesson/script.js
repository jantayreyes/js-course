'use strict';

const  bookings = [];

// default values can contain any expression
const createBooking = function(flightNum, numPassangers = 1, price = 199 * numPassangers) {
  
  // old way to set default parameters - ES5
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('RF122', 5);

//In case we want to skip a middle parameter, this is the unique way to achieve
createBooking('RF122', undefined, 400);