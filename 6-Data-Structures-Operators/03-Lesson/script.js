'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return (this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};



const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); //In case we need tbe values individually
console.log(1, 2, 7, 8, 9);

const newMenu =  ['Fries', ...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // Shallow copy

const mainMenuCopy2 = restaurant.mainMenu;
console.log(mainMenuCopy2);

// Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Interables: arrays, strings, maps, sets. Not objects. 
const str = 'Jesus';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);
console.log('j', 'e', 's', 'u', 's');
// console.log(`${...str} Antay`) - Template literal does not expect values separated by commas.

//Real world example
// const ingredients = [
//   prompt('Let\'s make pasta! Ingrediente 1?'), 
//   prompt('Let\'s make pasta! Ingrediente 2?'), 
//   prompt('Let\'s make pasta! Ingrediente 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); - by old way

// restaurant.orderPasta(...ingredients) - by Spread operator

// Objects - since 2018 Spread operator works on Objects too.
const newRestaurant = {foundedYear: 2750, ...restaurant, founder: 'Josep Rools'};
console.log(newRestaurant); 

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Pizzaria Carlos';
console.log(restaurant.name);
console.log(restaurantCopy.name);