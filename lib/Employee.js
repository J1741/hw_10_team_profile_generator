const inquirer = require('inquirer');

// create Employee class with name, employee ID, and email
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "nameInput",
          message: "What is the employee's name?"
        }
      ])
      .then(nameData => {
        this.name = nameData.nameInput;
        console.log("Employee name is:", this.name);
      });
  }

  getId() {
    inquirer
      .prompt([
        {
         type: "input",
         name: "idInput", 
         message: "What is the employee's id?"
        }
      ])
      .then(idData => {
        this.id = idData.idInput;
        console.log("Employee id is:", this.id);
      });
  }

  getEmail() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "emailInput",
          message: "What is the employee's email address?"
        }
      ])
      .then(emailData => {
        this.email = emailData.emailInput;
        console.log("Employee email is:", this.email);
      });
  }

  getRole() {
    return "Employee";
  }

}

module.exports = Employee;