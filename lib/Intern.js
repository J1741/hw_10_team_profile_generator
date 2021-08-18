const inquirer = require('inquirer');

// import from Employee.js
const Employee = require('./Employee');

// create Intern class that extends Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
   inquirer
    .prompt([
      {
        type: "input",
        name: "schoolInput",
        message: "What is the intern's school?"
      }
    ])
    .then(schoolData => {
      this.school = schoolData.schoolInput;
      console.log("Intern's school is:", this.school);
    });
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;