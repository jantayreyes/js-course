/*
//Basic Operators

var yearNow, yearJohn, yearMark;
ageJohn = 28;
ageMark =  33;

// Math Operators
yearNow = 2020;
yearJohn  = yearNow - ageJohn;
yearMark =  yearNow - ageMark;
console.log(yearJohn);
console.log(yearMark);
console.log(yearNow + 5);
console.log(yearNow / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof 0perator => say to us the type of variable we got.
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "I do not where I live 10 years ago");
var x;
console.log(typeof x);

*/
// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18
 // Muliple operators 
var isFulllAge =  now - yearJohn >= fullAge; // true
console.log(isFulllAge);

// Groupin
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assigments

var x, y;

x = y = (3 + 5) * 4 - 6; // 8*4 - 6// 32-6// 26
console.log(x, y);

// More operators

x = x * 2;
y *= 2;
console.log(x, y); // 52, 52

x++
console.log(x);
