'use strict'

// console.log(this);

const calcAge = function(birthYear) {
  console.log(2020 - birthYear);
  // console.log(this); // Undefined in strict mode, in normal mode it will be a global object, in that case it will be the window object.
};
calcAge(1995);

const calcAgeArr = (birthYear) => {
  console.log(2020 - birthYear);
  // console.log(this); // The arrow function does not have his own this keyword, instead he looks in his parents function/parents scope to find out the this keyowrkd (lexical this keyword). In the global scope is window.
};
calcAgeArr(1993);

const jesus = {
  firstName: 'Jesus',
  birthYear:  1995,
  calcAge: function() {
    console.log(this); // It is jesus object. 
    console.log(2020 - this.birthYear);
  }
}
jesus.calcAge();

const matilda = {
  birthYear: 2017,
};

matilda.calcAge =  jesus.calcAge;
matilda.calcAge(); // the this keyword is point in the object which call him, in this case matilda is the object calling the this keyworkd, and do not jesus. 

const f =  jesus.calcAge;
f(); // undefined



