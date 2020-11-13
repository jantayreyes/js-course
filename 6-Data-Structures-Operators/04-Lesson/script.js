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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients); 
  },
};

// 1) DESTRUCTURING
// SPREAD, because on RIGHT sied of =  
const arr = [1, 2, ...[3,4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood]= [...restaurant.mainMenu, ...restaurant.starterMenu] // REST element MUST be last element
console.log(pizza, rissoto, otherFood);

// REST in Objects
const { sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); // Taking only weekdays

// 2) FUNCTIONS
// Rest arguments
const add = function(...numbers) {
 
  let sum =  0
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2);
add(5, 2, 3, 5, 6, 3, 1)

const x = [23, 5, 7]; //This is an array, for that reason you ahve to use the spread operator in order to take every single element of that array and use de ADD function.
add(...x); 

restaurant.orderPizza('Potato', 'quesso', 'azucar');
restaurant.orderPizza('cheese');
