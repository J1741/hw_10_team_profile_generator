const inquirer = require('inquirer');
const fs = require('fs');

// get access to constructor functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// get access to html generator functions
const {createManagerCard, createEngineerCard, createInternCard, generatePage} = require("./src/generateHTML");

const teamCards = [];

// gets manager info, creates card, and handles next choice
function getManagerInfo() {
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
        name: "nextChoice",
        message: "What type of team member would you like to add next?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
      }
    ])
    .then(managerData => {
      // create manager object and card, append to array
      const manager = new Manager(managerData.nameInput, managerData.idInput, managerData.emailInput, managerData.officeNumberInput);
      const newManagerCard = createManagerCard(manager);
      teamCards.push(newManagerCard);

      // console logs to check things
      console.log("\n----\nHere is the newManagerCard:");
      console.log(newManagerCard);

      // handle next choice is engineer
      if (managerData.nextChoice === "Engineer") {
        console.log("--\nOkay, let's add an engineer:")
        getEngineerInfo();
      }

      // handle next choice is intern
      if (managerData.nextChoice === "Intern") {
        console.log("--\nOkay, let's add an intern:")
        getInternInfo();
      }

      // handle next choice is done
      if (managerData.nextChoice === "I am done adding team members") {
        console.log("\n----\nWe are done adding team members. Here are the team cards:")
        console.log(teamCards);
        console.log(`There are ${teamCards.length} members on the team`)
      }
    });
} 

// gets engineer info, appends to team, and handles next choice
function getEngineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameInput",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "idInput",
        message: "What is the engineer's employee ID?"
      },
      {
        type: "input",
        name: "emailInput",
        message: "What is the engineer's email address?"
      },
      {
        type: "input",
        name: "githubInput",
        message: "What is the engineer's GitHub username?"
      },
      {
        type: "list",
        name: "nextChoice",
        message: "What type of team member would you like to add next?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
      }
    ])
    .then(engineerData => {
      // create engineer object and card, append to array
      const engineer = new Engineer(engineerData.nameInput, engineerData.idInput, engineerData.emailInput, engineerData.githubInput);
      const newEngineerCard = createEngineerCard(engineer);
      teamCards.push(newEngineerCard);

      // console logs to check things
      console.log("\n----\nHere is the newEngineerCard:");
      console.log(newEngineerCard);

      // handle next choice is engineer
      if (engineerData.nextChoice === "Engineer") {
        console.log("--\nOkay, let's add an engineer:")
        getEngineerInfo();
      }

      // handle next choice is intern
      if (engineerData.nextChoice === "Intern") {
        console.log("--\nOkay, let's add an intern:")
        getInternInfo();
      }

      // handle next choice is done
      if (engineerData.nextChoice === "I am done adding team members") {
        console.log("\n----\nWe are done adding team members. Here are the team cards:")
        console.log(teamCards);
        console.log(`There are ${teamCards.length} members on the team`)
      }
    });
}

// gets intern info, appends to team, and handles next choice
function getInternInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameInput",
        message: "What is the intern's name?"
      },
      {
        type: "input",
        name: "idInput",
        message: "What is the intern's employee ID?"
      },
      {
        type: "input",
        name: "emailInput",
        message: "What is the intern's email address?"
      },
      {
        type: "input",
        name: "schoolInput",
        message: "What is the intern's school?"
      },
      {
        type: "list",
        name: "nextChoice",
        message: "What type of team member would you like to add next?",
        choices: ['Engineer', 'Intern', 'I am done adding team members']
      }
    ])
    .then(internData => {
      // create intern object and card, append to array
      const intern = new Intern(internData.nameInput, internData.idInput, internData.emailInput, internData.schoolInput);
      const newInternCard = createInternCard(intern);
      teamCards.push(newInternCard); 

      // console logs to check things
      console.log("\n----\nHere is the newInternCard:");
      console.log(newInternCard);

      // handle next choice is engineer
      if (internData.nextChoice === "Engineer") {
        console.log("--\nOkay, let's add an engineer:")
        getEngineerInfo();
      }

      // handle next choice is intern
      if (internData.nextChoice === "Intern") {
        console.log("--\nOkay, let's add an intern:")
        getInternInfo();
      }

      // handle next choice is done
      if (internData.nextChoice === "I am done adding team members") {
        console.log("\n----\nWe are done adding team members. Here are the team cards:")
        console.log(teamCards);
        console.log(`There are ${teamCards.length} members on the team`)
      }

    });
}

// runs app
function init() {
  console.log("====\nWelcome! Let's build your team:\n====");
  getManagerInfo();
}

init();