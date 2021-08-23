const inquirer = require('inquirer');

// import classes from lib files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import HTML generate function
// const generate = require('./src/generateHTML');

// create team array
const team = [];

// gets manager info, appends to team, and handles next choice
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
      const manager = new Manager(managerData.nameInput, managerData.idInput, managerData.emailInput, managerData.officeNumberInput);
      team.push(manager);
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
        console.log("We are done adding team members. Here is the team:")
        console.log(team);
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
      const engineer = new Engineer(engineerData.nameInput, engineerData.idInput, engineerData.emailInput, engineerData.githubInput);
      team.push(engineer);
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
        console.log("--\nWe are done adding team members. Here is the team:")
        console.log(team);
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
      const intern = new Intern(internData.nameInput, internData.idInput, internData.emailInput, internData.schoolInput);
      team.push(intern);
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
        console.log("We are done adding team members. Here is the team:")
        console.log(team);
      }
    });
}

// runs app
function init() {
  console.log("====\nWelcome! Let's build your team:\n====");
  getManagerInfo();
}

init();