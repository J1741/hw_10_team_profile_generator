// import from Employee.js
const Employee = require('./Employee');

// create Manager class that extends Employee class
class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    super(name, employeeID, email);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;