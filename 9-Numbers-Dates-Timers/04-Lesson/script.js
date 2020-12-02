'use strict';

const future =  new Date(2037, 10, 16, 23, 5);

console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date( 2037, 3, 24))
console.log(days1);

//INTERNATIONALIZATION
const num = 323239293.23;

const options = {
  style:'currency', //unit, percent
  unit: 'celsius',
  currency: 'EUR', // If we set style as currency, we have to set the currency (eur, dollars, pounds, etc).
  // useGrouping: false - false = without separators.
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));

// TIMERS
const ingredients = ['olives', 'spinach']

const pizzaTimer = setTimeout(
  (ing1, ing2) => 
  console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕🍕🍕🍕🍕`), 
  3000, 
  ...ingredients,
);

// The first line of code will be executed and then the timer.
console.log('Waiting for your order...');

// It will remove timer if spinach is an ingredient.
if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);