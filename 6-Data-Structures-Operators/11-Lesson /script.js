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

// Maps
// Create a map
const res = new Map();
res.set('name', 'Classico Italiano');
res.set(1, 'Firenze, Italy');
console.log(res.set(2, 'Lisbon, Portugal'));

// Add data 
res
.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are close :(');
console.log(res);

// Read data with Keys 
console.log(res.get('name'));
console.log(res.get(true));
console.log(res.get('open'));

const time = 21;
console.log(res.get(time > res.get('open') && time < res.get('close')));

// Check if contains
console.log(res.has('categories'));

// Delete 
res.delete(2);
console.log(res);

// Count
console.log(res.size);

// Remove all the elments
// res.clear();

// This won't work. Because in the HEAP it has difference values in memory.
res.set([1, 2, 3, 4], 'Test');
console.log(res);
console.log(res.get([1, 2, 3, 4]));

// In order to work, we have to store in a variable.
const arr = [1, 2, 3, 4]
res.set(arr, 'Test');
console.log(res.get(arr));

// DOOm
res.set(document.querySelector('h1'), 'Title\' page');
console.log(res);





