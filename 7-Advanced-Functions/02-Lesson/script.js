'use strict';

const flight = 'LH234';
const jesus = {
  name: 'Jesus Antay',
  passaport: 2323235533,
};

const checkIn = function (flightNum, passenger ) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passaport === 2323235533) {
      alert("Check in");
    } else {
      alert("Wrong passaport!");
    }
};

checkIn(flight, jesus);
console.log(flight);
console.log(jesus);

// Is the same as doing ...
const flightNum = flight;
const passenger = jesus;

const newPassport =  function (person) {
  person.passaport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jesus);
checkIn(flight, jesus);
console.log(jesus);

