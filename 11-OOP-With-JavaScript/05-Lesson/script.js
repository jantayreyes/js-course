'use strict';

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear =  birthYear;
  },

};

const steven = Object.create(PersonProto)
steven.name = 'Steven';
console.log(steven);

steven.birthYear = 2000;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2003);
sarah.calcAge();

const loop = 121212
