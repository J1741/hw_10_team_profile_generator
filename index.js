// use inquirer
const inquirer = require('inquirer');

// import classes from lib files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import HTML generate function
// const generate = require('./src/generateHTML');

// create team array
const team = [];

// get manager info add manager to team
function getManagerInfo() {
  // console.log("Welcome! Please build your team:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameInput",
        message: "What is the manager's name?"
      },
      {
        type: "input",
        name: "idInput",
        message: "What is the manager's employee ID?"
      },
      {
        type: "input",
        name: "emailInput",
        message: "What is the manager's email address?"
      },
      {
        type: "input",
        name: "officeNumberInput",
        message: "What is the manager's office number?"
      },
      {
        type: "list",
        name: "choiceInput",
        message: "What type of team member would you like to add next?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
      }
    ])
    .then(managerData => {
      const manager = new Manager(
        managerData.nameInput,
        managerData.idInput,
        managerData.emailInput,
        managerData.officeNumberInput);
      team.push(manager);
      console.log(team);
    });
} 

// runs app
function init() {
  console.log("----\nWelcome! Please build your team:\n----");
  getManagerInfo();
}

init();