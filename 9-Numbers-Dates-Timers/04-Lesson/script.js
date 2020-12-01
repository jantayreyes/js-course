'use strict';

const future =  new Date(2037, 10, 16, 23, 5);

console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date( 2037, 3, 24))
console.log(days1);

//INTERNATIONALIZATION
