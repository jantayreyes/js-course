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




