// Reviewing functions

function calcAge(birthYear) {
  return 2020 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName) {
  const retirement =  65 - calcAge(birthYear)

  if (retirement > 0) {
    return `${firstName} will be retired in ${retirement} years.`
  } else {
    return `${firstName} has been retired for ${retirement * (-1)} years.`
  }
}
 

console.log(yearsUntilRetirement(1995 , 'Jesús'));
console.log(yearsUntilRetirement(1950 , 'Viviana'));