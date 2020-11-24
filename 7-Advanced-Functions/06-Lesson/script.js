'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LR',
  bookings: [],
  //book: function() {} OLD sintax
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
  
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jesus Antay');
lufthansa.book(639, 'Alfredo Collazos');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; 

// BIND METHOD
// book.call(eurowings, 23, 'Sarah Williams');
// The bind method will not call the book method, instead it will return a new function where the THIS keyword will always be set to Eurwings.
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);


bookEW(33, 'Steven Williams');
bookEW(55, 'Solange Reyes');
console.log(eurowings);

// With bind we can set arguments to use, in this case for a specific fligth and airline. 
const bookEW23 = book.bind(eurowings, 649);
bookEW23('Mark Lorthon');
bookEW23('Raquel Meridiam');
console.log(eurowings);

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};
// lufthansa.buyPlane();

// If you click in "buy new plane" button, you call this method to increase the number of planes.
document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application - We do not need the THIS keyword.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// We set the rate of 23% like if set it by default. As we know with bind method we have to set first of all the this keyword, in this case we do not want to use it, so we set it as null, and after that we set the rate value which is 23%.
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(2400));

// Challenge

const tax = function(rate) {
  return function(value) {
   console.log(value + value * rate);
  } 
};

const ratePortugal = tax(0.23);
ratePortugal(100);
ratePortugal(1244);