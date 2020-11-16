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

// SETS

// Create a Set.
const ordersSet = new Set([
  'Pasta',
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);
console.log(ordersSet);

// String set.
console.log(new Set('Jesus'));

// Length for arrays, size for sets.
console.log(ordersSet.size);

// IF an element is contained - True/false
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Add elements to the set, unique value.
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Delete elements
ordersSet.delete('Risotto');
console.log(ordersSet);

// Retrieve values out of a Set
// There are no need to get values out of a set. 

// Delete all the elements from a set.
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) {
  console.log(order);
};

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);

// - First we create the set
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// - After that we use the Spread Operator to unpack, this elements will be put into a new constructed array.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log( new Set('Jesus Antay Reyes').size);
