const inquirer = require("inquirer");

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
    .then((mgrAnswers) => {
      const manager = new Manager(
        mgrAnswers.name,
        mgrAnswers.ID,
        mgrAnswers.email,
        mgrAnswers.office
      ).then((data) => {
        const HTMLpage = generateHTML(
          data.name,
          data.ID,
          data.email,
          data.office
        );
        console.log(HTMLpage);
      });
    });
};
generateProfile();
