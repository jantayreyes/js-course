// Arrays
const friend1 = 'Michael';
const friend2 = 'Kimber';
const friend3 = 'Robb';

const friends = ['Lora', 'Sam', 'Ned'];
console.log(friends);

// Array function - other way to create arrays
const years = new Array (1995, 1993, 1990, 1997);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //property
console.log(friends[friends.length - 1]);


friends[2] = 'Jacob'; //update an element
console.log(friends);
 // You can change an array even if you declared as a const, what you can not do is change the entire array.
// friends = ['Sol', 'Alfredo'];

const jesus = ['Jesus', 'Antay', 2020 - 1995, 'Web Developer', friends]; // the age is an expression, that is why you can do it in that way.
console.log(jesus.length);

//Exercise
const calcAge = function (birthYear) {
  return 2020 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array Methods

// Add elements
const newLength = friends.push('Rebbeca', 'Laura') //add elements to the end of an array.
console.log(friends);
console.log(newLength);

friends.unshift('Caitlyn'); // add elements to the beginning of an array.
console.log(friends);

// Remove elements
const popped = friends.pop(); // remove the last element.
console.log(friends);
console.log(popped);

friends.shift(); // remove the first element.
console.log(friends);

console.log(friends.indexOf('Lora')); // give the position in the array.
console.log(friends.indexOf('Requiem')); // return -1 becauze the element does not exists in the array.

console.log(friends.includes('lora')); // false, case insentive
console.log(friends.includes('Lora')); // true

if (friends.includes('Rebbeca')) {
  console.log('You have a friend called Rebbeca');
}





