// Ternary Operator and Switch Statements

const firstName = 'John';
const age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

const drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement

const job = 'instructor'

switch(job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beatiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}


const firsName = 'Jesus';
const ages = 18;
/*
if (age < 6) {
  console.log(firsName + ' is a baby.');
} else if (age >= 6 && age < 13  ){
  console.log(firsName + 'is a boy.');
} else if (age >= 13 && age < 20  ){
  console.log(firsName + ' is a teenager.');
} else if (age >= 20 && age < 30  ){
  console.log(firsName + ' is a young man.');
} else {
  console.log(firsName + ' is a man.');
}
*/

switch (true) {
  case ages < 6:
    console.log(firsName + ' is a baby.'); 
    break;
  case ages >= 6 && ages < 13: 
    console.log(firsName + 'is a boy.');
    break;
  case ages >= 13 && ages < 20 :
    console.log(firsName + ' is a teenager.');
    break;
  case ages >= 20 && ages < 30:
    console.log(firsName + ' is a young man.');
    break;
  default:
    console.log(firsName + ' is a man.');
}