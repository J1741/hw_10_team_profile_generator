const inquirer = require('inquirer');

// import from Employee.js
const Employee = require('./Employee')

// create Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "githubInput",
        message: "What is the engineer's github username?"
      }
    ])
    .then(githubData => {
      this.github = githubData.githubInput;
      console.log("Engineer's github username is:", this.github);
    });
  }

  getRole() {
    return "Engineer";
  }

}

module.exports = Engineer;