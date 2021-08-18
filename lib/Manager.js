const inquirer = require('inquirer');

// import from Employee.js
const Employee = require('./Employee');

// create Manager class that extends Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  getOfficeNumber() {
    inquirer
      .prompt ([
        {
          type: "input",
          name: "officeNumberInput",
          message: "What is the manager's office number?"
        }
      ])
      .then(officeData => {
        this.officeNumber = officeData.officeNumberInput;
        console.log("Manager office number is:", this.officeNumber);
      });
  }

  getRole() {
    return "Manager";
  }

}
    
module.exports = Manager;