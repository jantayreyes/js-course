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
  }
};

restaurant.orderDelivery({
  time: '23:19',
  address: 'Via del carrer 25',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Calle Loreno 25',
  time: '15:40',
})

// Destructuring Objects

const  { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing the property name
const { 
  name: restaurantName, 
  openingHours: hours, 
  categories: tags 
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = ['Chicken', 'Fries'], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuting objects
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj) // You must wrap everithing into parenthesis
console.log(a, b);

// Nested Objects
const { fri: {open: o, close: c} } = openingHours;
console.log(o, c);  

const { sat: {open, close} } = openingHours;
console.log(open, close);  

