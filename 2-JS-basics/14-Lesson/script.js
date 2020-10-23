// Objects

const jesusArray = [
  'Jesus',
  'Antay',
  2020 - 1995,
  'Web developer',
  ['Sol', 'Alfredo', 'Aynee']
];

const jesus = {
  firstName: 'Jesus',
  lastName: 'Antay',
  age: 2020 - 1995,
  job: 'Web developer',
  friends: ['Sol', 'Alfredo', 'Aynee']
};
console.log(jesus);

// dot notation
console.log(jesus.lastName);

// brackets notation
console.log(jesus['lastName']);
const nameKey = 'Name';
console.log(jesus['first' + nameKey]); // We can write an expressions inside the brackets
console.log(jesus['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Jesus? Choose between firstName, LasNmae, age, job, and friends');
// we have to use brackets notations to replace the actual property of Jesus's Object.
if (jesus[interestedIn]) {
  console.log(jesus[interestedIn]); 
} else {
  console.log('Wrong request!')
}

// Add propertys to an object
jesus.location = 'Madrid'; 
jesus['instagram'] = '@trallazos'

console.log(jesus);

//Challenge
// "Jesus has 3 friends, and his best friend is called Aynne"

console.log(`${jesus.firstName} has ${jesus.friends.length} friends, and his best friend is called ${jesus.friends[2]}`);