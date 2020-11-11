'use strict';

function calcAge(birthYear) {
  const age =  2020 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial =  true; // variables declared with var keyword are function scoped, that means millenial is inside the printAge function scope.
      
      //creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT'

      const str = `Oh, and you are a millenial, ${firstName}.`
      // str will use the firstName Steven, because JS first of all look at on the current scope, in this case the if statement, because there is a firstName variable, js does not need to look up.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2 ,3));
  
    }
    console.log(millenial);
    // add(2, 3); -> Do not work because functions in ES6 are block scoped. That means the add function will work only in the if statement, this is happening for the "strict mode".
    console.log(output);
  }
  printAge()
  return age;
}

const firstName = 'Jesus';
calcAge(1995);
