// import from Employee.js
const Employee = require('./Employee');

// create Intern class that extends Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

module.exports = Intern;