// import from Employee.js
const Employee = require('./Employee');
const inquirer = require('inquirer');

// create Manager class that extends Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // add function to prompt for manager info
  getManagerInfo() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's full name?"
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is the manager's employee ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
    ])
    .then(data => {
      this.name = data.managerName;
      this.id = data.id;
      this.email = data.email;
      this.officeNumber = data.officeNumber;
      console.log("Here's the manager data!");
      console.log(this);
    });
  }
}
    
module.exports = Manager;