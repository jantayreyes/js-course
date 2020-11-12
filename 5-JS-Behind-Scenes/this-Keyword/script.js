'use strict'

// // console.log(this);

// const calcAge = function(birthYear) {
//   console.log(2020 - birthYear);
//   // console.log(this); // Undefined in strict mode, in normal mode it will be a global object, in that case it will be the window object.
// };
// calcAge(1995);

// const calcAgeArr = (birthYear) => {
//   console.log(2020 - birthYear);
//   // console.log(this); // The arrow function does not have his own this keyword, instead he looks in his parents function/parents scope to find out the this keyowrkd (lexical this keyword). In the global scope is window.
// };
// calcAgeArr(1993);

// const jesus = {
//   firstName: 'Jesus',
//   birthYear:  1995,
//   calcAge: function() {
//     console.log(this); // It is jesus object. 
//     console.log(2020 - this.birthYear);
//   }
// }
// jesus.calcAge();

// const matilda = {
//   birthYear: 2017,
// };

// matilda.calcAge =  jesus.calcAge;
// matilda.calcAge(); // the this keyword is point in the object which call him, in this case matilda is the object calling the this keyworkd, and do not jesus. 

// const f =  jesus.calcAge;
// f(); // undefined


var firstName = 'Matilda'
const jesus1 = {
    firstName: 'Jesus',
    birthYear:  1995,
    calcAge: function() {
      console.log(this);
      console.log(2020 - this.birthYear);
    },
    greet: () => {
      console.log(this); // firstname is matilda, because we declared it with var. that creates properties on the global object.

      console.log(`Hey ${this.firstName}`); // arrow functions do not have their own this keyworkd, and they look for the parent scope, in that case is window.
    },
};
jesus1.greet(); //Undefined

const jesus2 = {
  firstName: 'Jesus',
  birthYear:  1995,
  calcAge: function() {
    console.log(this);
    console.log(2020 - this.birthYear);
  },
  greet: function() {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // do not use arrow function
  },
};
jesus2.greet(); 

const jesus3 = {
  firstName: 'Jesus',
  birthYear:  1995,
  calcAge: function() {

    // Solution 1 - old version
    // console.log(2020 - this.birthYear);
    // const self = this; - self or that
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996) 
    // };

    // Solution 2 - ES6+ - Arrow functions
    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996) 
    };
    isMillenial();
  },
  
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jesus3.greet(); 
jesus3.calcAge();

// Arguments Keyword
const addExpr = function (a ,b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 3));
console.log(addExpr(2, 5, 8, 5, 7));

var addArrow = (a, b) => {
  console.log(arguments); // arrow functions do not have arguments
  return a + b;
}

console.log(addArrow(2, 3));
console.log(addArrow(2, 5, 8, 5, 7));