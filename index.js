const inquirer = require("inquirer");

const fs = require("fs");
const generateHTML = require("./src/page-template.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const generateProfile = function () {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What the Manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Manager's ID number?",
      },
      {
        type: "text",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
      },
    ])
    .then(function (mgrAnswers) {
      const manager = new Manager(
        mgrAnswers.name,
        mgrAnswers.ID,
        mgrAnswers.email,
        mgrAnswers.office
      );
      return manager;
    })
    .then(function (manager) {
      const HTMLpage = generateHTML(manager);
    })
    .then(fs.writeFile("./dist/index.HTML", HTMLpage));
};
generateProfile();
