// import from Employee.js
const Employee = require('./Employee')

// create Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(name, employeeID, email, githubUsername) {
    super(name, employeeID, email);
    this.githubUsername = githubUsername;
  }
}

module.exports = Engineer;