const inquirer = require('inquirer');
const fs = require('fs');

// import constructor functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import html generator functions
const {createManagerCard, createEngineerCard, createInternCard, joinCards, generatePage, writePage} = require("./src/generateHTML");

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
        console.log("\x1b[36m%s\x1b[0m", `\n----\nYou added ${teamCards.length} team members. Generating team page ...:`)
        pageContent = generatePage(teamCards);
        writePage(pageContent);
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
        console.log("\x1b[36m%s\x1b[0m", `\n----\nYou added ${teamCards.length} team members. Generating team page ...:`)
        pageContent = generatePage(teamCards);
        writePage(pageContent);
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
        console.log("\x1b[36m%s\x1b[0m", `\n----\nYou added ${teamCards.length} team members. Generating team page ...`)
        pageContent = generatePage(teamCards);
        writePage(pageContent);
      }
    });
}

// runs app
function init() {
  console.log("\x1b[36m%s\x1b[0m", "====\nWelcome! Let's build your team:\n====");
  // console.log("====\nWelcome! Let's build your team:\n====");
  getManagerInfo();
}

init();