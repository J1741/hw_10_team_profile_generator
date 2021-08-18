// import from Employee.js
const Employee = require('./Employee');

// create Intern class that extends Employee class
class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    super(name, employeeID, email);
    this.school = school;
  }
}

module.exports = Intern;