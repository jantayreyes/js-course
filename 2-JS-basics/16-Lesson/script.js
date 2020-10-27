//Loops

// console.log('Liftin weights repitition 1 🏋');
// console.log('Liftin weights repitition 2 🏋');
// console.log('Liftin weights repitition 3 🏋');
// console.log('Liftin weights repitition 4 🏋');
// console.log('Liftin weights repitition 5 🏋');
// console.log('Liftin weights repitition 6 🏋');
// console.log('Liftin weights repitition 7 🏋');

//FOR Loop

// for loop keeps running while condition is TRUE.
for(let rep = 1; rep <= 7; rep ++) {
  console.log(`Lifting weights repitition ${rep} 🏋`);
}

const jesusArray = [
  'Jesús',
  'Antay',
  2020-1995,
  'Web Developer',
  ['Viviana', 'Alfredo', 'Solange'],
  true
];

const types = [];

// console.log(jesusArray[0]);
// console.log(jesusArray[1]);
// console.log(jesusArray[2]);
// console.log(jesusArray[3]);
// console.log(jesusArray[4]);

for (let i = 0; i < jesusArray.length; i++) {
  // Reading from JesusArray
  console.log(jesusArray[i], typeof jesusArray[i]);
  // Filling types array
  // types[i] = typeof jesusArray[i];
  // console.log(types[i]);
  types.push(typeof jesusArray[i]);
}
console.log(types);

const years = [1993, 1995, 1997, 1975, 2000];
const ages = [];

for(let i = 0; i < years.length; i++ ) {
  ages.push(2020 - years[i]);
}
console.log(ages);

// Continue and break

console.log('---Only Strings---');
for (let i = 0; i < jesusArray.length; i++) {
  if (typeof jesusArray[i] !== 'string') continue;
    console.log(jesusArray[i], typeof jesusArray[i]);
}

console.log('---Break with number---');
for (let i = 0; i < jesusArray.length; i++) {
  if (typeof jesusArray[i] === 'number') break;
    console.log(jesusArray[i], typeof jesusArray[i]);
}


const jesus = [
  'Jesús',
  'Antay',
  2020-1995,
  'Web Developer',
  ['Viviana', 'Alfredo', 'Solange'],
  true
];

for(let i = jesus.length - 1; i >= 0; i--) {
  console.log(i, jesus[i]);
}

// Loop inside a Loop
for(let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------Starting exercise ${exercise}`);
  for(rep = 1; rep <= 10; rep++) {
    console.log(`Exercise ${exercise} Lifting weights repitition ${rep} 🏋`)
  }
}


console.log('---- FOR LOOP ----')
for(let rep = 1; rep <= 10; rep ++) {
  console.log(`Lifting weights repitition ${rep} 🏋`);
}

// WHILE loop
console.log('---- WHILE LOOP ----')
let reps = 1;
while (reps <= 10) {
  console.log(`Lifting weights repitition ${reps} 🏋`);
  reps ++;
}
// Random number

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('Loop is about to end...');
  }
}