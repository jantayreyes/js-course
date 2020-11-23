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

// book(23, 'Sarah Williams'); - Does not work

// CALL METHOD
// The first argument is where we cant to set the this.keyword
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings); 

book.call(lufthansa, 553, 'Marlon Couri');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 588, 'Loper Rand');
console.log(swiss);

// APPLY METHOD
// Apply method need as second argument and array of data
const fligthData = [583, 'George Cooper'];
book.apply(swiss, fligthData);
console.log(swiss);

// In modern JS, we do not apply, because with call and SPREAD operator, we actually can do the same thing. 
book.call(swiss, ...fligthData);
console.log(swiss);

