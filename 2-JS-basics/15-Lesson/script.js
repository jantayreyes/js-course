const jesus = {
  firstName: 'Jesus',
  lastName: 'Antay',
  birthYear: 1995,
  job: 'Web Developer',
  friends: ['Aynee', 'Sol', 'Alfredo'],
  driverLicense: false,
  // calcAge: function(birthYear) {
  //   return 2020 - birthYear;
  // }
  // calcAge: function() {
  //   // console.log(this);
  //   return 2020 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.driverLicense ? 'a' : 'no'} driver's license`

  }
};

console.log(jesus.calcAge(1995));
console.log(jesus.age);
console.log(jesus.age);
console.log(jesus.age);

// Example
//"Jonas is a 45-year old teacher. and he has a driver's License"

console.log(jesus.getSummary());

