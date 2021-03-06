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
const passanger = 'jESuS '; // Jesus
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
console.log(email === normalizeEmail); // true

// Replacing

const priceEU = '200,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');

console.log(priceEU, priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Regular expression
console.log(announcement.replaceAll(/door/g, 'gate')); //between slashes there is not a string. it is a regular expression

// Booleans - includes - starstWith - ensdWith
const place = 'Airbus A1230neo';
console.log(place.includes('1230neo'));
console.log(place.includes('Boing'));
console.log(place.startsWith('Air'));
console.log(place.endsWith('P'));

if (place.startsWith('Airbus') && place.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
};

// Examples
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('I have sucks and camera');
checkBaggage('I have some Snacks and a gun for protection');

// split
console.log('a+very+nice+string'.split('+')); // elements of array
console.log('Jesus Antay Reyes'.split(' '));

const [firstName, lastName] = 'Jesus Antay'.split(' ');
console.log(firstName, lastName); // array of [Jesus, Antay]
const [firstName1, ...lastName1] = 'Jesus Antay Reyes'.split(' ');
console.log(firstName1, lastName1); // Jesus [Antay, Reyes]

// join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName =  function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smite davis');
capitalizeName('jesus abraham antay reyes');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');

};

console.log(maskCreditCard(12412412612341241245));
console.log(maskCreditCard('2151251261242140555650'));

// repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
};

planesInLine(5);
planesInLine(10);
planesInLine(15);



