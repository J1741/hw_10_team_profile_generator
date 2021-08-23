const fs = require('fs');

// creates a manager card from info in manager object
function createManagerCard(manager) {
  return `<!-- manager card -->
        <div class="card shadow border-info m-3" style="width: 19rem;">
          <img src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" class="card-img-top"> 
          <div class="card-header" style="background-color: gainsboro;"><h5>Manager: ${manager.name}</h5></div>
          <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-2">ID: ${manager.id}</li>
              <li class="list-group-item p-2">Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></li>
              <li class="list-group-item p-2">Office Number: 118</li>
            </ul>
          </div>
        </div>`
}

// creates an engineer card from info in engineer object
function createEngineerCard(engineer) {
  return `\n        <!-- engineer card -->
        <div class="card shadow border-info m-3" style="width: 19rem;">
          <img src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" class="card-img-top"> 
          <div class="card-header" style="background-color: gainsboro;"><h5>Engineer: ${engineer.name}</h5></div>
          <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-2">ID: ${engineer.id}</li>
              <li class="list-group-item p-2">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
              <li class="list-group-item p-2">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
          </div>
        </div>`
}

// creates an intern card from info in intern object
function createInternCard(intern) {
  return `\n        <!-- intern card -->
        <div class="card shadow border-info m-3" style="width: 19rem;">
          <img src="https://images.unsplash.com/photo-1611079830522-dc0c6e5f85ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1068&q=80" class="card-img-top"> 
          <div class="card-header" style="background-color: gainsboro;"><h5>Intern: ${intern.name}</h5></div>
          <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-2">ID: ${intern.id}</li>
              <li class="list-group-item p-2">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
              <li class="list-group-item p-2">School: ${intern.school}</li>
            </ul>
          </div>
        </div>`
}

// flattens team cards array
function joinCards(teamCards) {
  return teamCards.join('');
}

// generates the page content
function generatePage(teamCards) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header class="jumbotron jumbotron-fluid bg-info"><h1 class="display-3 text-light text-center">Team Members</h1></header>
    <main>
      <section class="d-flex justify-content-center flex-wrap p-2">
        <!-- team member cards will go here -->
        ${joinCards(teamCards)}
      </section>
    </main>
  </body>
</html>`
}

// writes page content to file
function writePage(pageContent) {
  fs.writeFile('./dist/team.html', pageContent, (err) => err ? console.log(err) : console.log("\x1b[32m%s\x1b[0m", "\n----\nDone! Successfully created team HTML page in ./dist folder\n"));
}

module.exports = {
  createManagerCard,
  createEngineerCard,
  createInternCard,
  joinCards,
  generatePage,
  writePage
}