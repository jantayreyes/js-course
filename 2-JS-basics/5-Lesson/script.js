// If statements

const firstName = 'Jesus';
const civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon -.-)');
}

const isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon -.-)');
}

const markMass = 80;
const johnMass = 90;

const markHeight = 1.81;
const johnHeight = 1.77;

const markBmi = markMass / (markHeight ^ 2);
const johnBmi = johnMass / (johnHeight ^ 2);

console.log(markBmi > johnBmi)

if (markBmi > johnBmi){
  console.log('WOW! Mark has to do exercise!');
}else {
  console.log('OMG, Is John fat?');
}

