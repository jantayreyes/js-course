'use strict';

// 
const account = {
  owner: 'Jesus',
  movements: [3500, 300, -2520, 430],

  // Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setter
  set latest(mov) {
    this.movements.push(mov);
  }
};
console.log(account);

// Getter
console.log(account.latest);

// Setter
account.latest = 200;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Intance methods
  // Mehtods will be added to .prototype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`); 
  }

  get age() {
    return 2050 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName
  }

  // Static Methods
  static hey() {
      console.log('Hey there!');
  }
};

const jessica = new PersonCl('Jessica Davis', 1995)
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Waltercito El Loco', 1955);


// Static Methods
// This methods are attached on the constructor.
Array.from(document.querySelectorAll('h1'));
Number.parseFloat(12);

PersonCl.hey();

// [1,2,3].from() - All the arrays does not inherit the FROM method

// This will work only in the construsctor.
// PersonCl.hey = function() {
//   console.log('Hey there!');  
//   console.log(this);
// };
// PersonCl.hey();

// jessica.hey(); Does not work.