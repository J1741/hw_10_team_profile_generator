// import from Employee.js
const Employee = require('./Employee')

// create Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

module.exports = Engineer;