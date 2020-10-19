// Functions

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

const ageJesus = calculateAge(1995);
const ageSolange = calculateAge(1993);
const ageAlfredo = calculateAge(1997);

console.log(ageJesus, ageSolange, ageAlfredo);

function yearsUntilRetirament(year, firstName) {
  const age = calculateAge(year)
  const retirament = (65 - age);
  if (retirament > 0) {
    console.log(`${firstName} retires in ${retirament} years`);
  } else {
    console.log(`${firstName} is already retired since ${retirament * (-1)} years ago`);
  }
}

yearsUntilRetirament(1995, 'Jesus');
yearsUntilRetirament(1993, 'Solange');
yearsUntilRetirament(1997, 'Alfredo');
yearsUntilRetirament(1945, 'Salome');