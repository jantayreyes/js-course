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
};

const jessica = new PersonCl('Jessica Davis', 1995)
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Waltercito El Loco', 1955);
