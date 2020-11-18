'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients); 
  },
};

const airline = 'TAP Air Peru';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B331'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Peru')); // Case sensitive

console.log(airline.slice(4)); // the 4 es position which the extract will start - Substring
console.log(airline.slice(4, 7)); // The 7 is the end parameter. 

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // We add +1 in order to jump the space.

console.log(airline.slice(-4)); // Peru
console.log(airline.slice(1, -1)); // AP Air Per

// EXAMPLE
const checkMiddleSeat = function(seat) {
  // B AND E are middle seats
  const s = seat.slice(-1)
  console.log(s);
  if (s === 'B' || s === 'E') console.log('You got middle seat.'); 
  else console.log('You got an amazing seat without kids.');
  
};

checkMiddleSeat('11B');
checkMiddleSeat('21C');
checkMiddleSeat('01Q');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('JESUS'.toLowerCase());

// Fix capitalization in name
const passanger = 'jESuS'; // Jesus
const passangerLower =  passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

// Comparing email
const email = 'test@gmail.com';
const loginEmail = '  Test@Gmail.Com \n' // enter = \=

const lowerEmail =  loginEmail.toLowerCase();
const trimmedEamil = lowerEmail.trim(); // erase whitespaces
console.log(trimmedEamil);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);






