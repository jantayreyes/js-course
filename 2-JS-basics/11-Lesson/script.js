
// Function expression

const calAge2 = function(birthYear) {
  return 2037 - birthYear
}

// Arrow function

const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirament =  65 - age;
  return `${firstName} retire in ${retirament} years.`;
}

console.log(yearsUntilRetirement(1995, 'Jesús'));
console.log(yearsUntilRetirement(1993, 'Solange'));
console.log(yearsUntilRetirement(1997, 'Alfredo'));


// Calling others functions
//Juice Machine

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
