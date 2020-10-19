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


//Function declaration

  // function whatDoYouDo(job, firstName) {}

//Functions expression

const whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return `${firstName} teaches kids how to code`;
    case 'driver':
      return `${firstName} drives a cab in Lisbon`;
    case 'designer':
      return `${firstName} designs beatiful websites`;
    default:
      return `${firstName} does something else`;
  }
}

console.log(whatDoYouDo('driver', 'Jesus'));
console.log(whatDoYouDo('painter', 'Viviana'));
console.log(whatDoYouDo('teacher', 'Alfredo'));
console.log(whatDoYouDo('designer', 'Solange'));