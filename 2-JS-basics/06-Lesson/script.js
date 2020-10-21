// Boolean logic

const firsName = 'Jesus';
const age = 12;

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