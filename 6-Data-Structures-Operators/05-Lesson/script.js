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

// SHORT-CERCUITING

console.log('------ OR ------');
// If the first value, on the OR operator is TRUE, it returs inmmediately the first value. 
// Use ANY data type, return ANY data type, short-circuiting 
console.log(3 || 'Jesus');
console.log('' || 'Jesus');
console.log(true || 0);
console.log(undefined || null); // Null, because is the last falsy value and there is not truthy value.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello, because is the first truthy value

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
restaurant.numGuests = 23;
// console.log(restaurant.numGuests);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND ------');
console.log(0 && 'Jesus');
console.log(7 && 'Jesus');

console.log('Hello' && 23 && null && 'Jesus'); // null, because at that point of the end operation will be false, so the result will be the first false element. 

if(restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'cheese');
};

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'chicken');

