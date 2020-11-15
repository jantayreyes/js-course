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

// ES2020 OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); 
// a propertiy exists with the NULLISH statment, that means that only not exists if the value is undefined or null.
// console.log(restaurant.openingHours.mon.open); 

if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
};

// Case when we do not know if restaurant object the property mon.
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
};

// Case when we do not know if the restaurant object has the property openingHours.
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
};
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  // If we use || operator, we have a falsy value because the restaurant open at 0, for that reason we have tou use the Nullish operator ??.
  console.log(`On ${day}, we open at ${open}`);
};

// Methods 
console.log(restaurant.order?.(0, 2) ?? 'Method does not exist');

console.log(restaurant.orderRissoto?.(5, 7) ?? 'Method does not exist');

// Arrays
const user = [{name: 'Jesus', email: 'hello@gmail.com'}];
console.log(user[0]?.name ?? 'User array empty');
console.log(user[2]?.name ?? 'User array empty');

if(user.length > 0){
  console.log(user[0].name)
} else {
  console.log('User array empty');
};