const inquirer = require("inquirer");
const team = [];
const fs = require("fs");
const dynHTML = require("./utils/dynHTML.js");
const generateHTML = require("./src/page-template.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const initiateProfile = async function () {
  const { name, ID, email, office } = await inquirer.prompt([
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
      message: "What is the Manager's office number?",
    },
  ]);
  // const {name, ID, email, office}=manager;

  const newManager = new Manager(name, ID, email, office);
  team.push(newManager);
  console.log(team);
  addEmployee();
};

const addEmployee = async function () {
  const { employee } = await inquirer.prompt([
    {
      type: "list",
      name: "employee",
      message: "Do you want to add another employee?",
      choices: ["Intern", "Engineer", "none"],
      default: "Engineer",
    },
  ]);
  switch (employee) {
    case "Intern":
      return addIntern();
    case "Engineer":
      return addEngineer();
    case "none":
      const generatedHTML = generateHTML(team);
      return writeHTML(generatedHTML);
  }
};

const addEngineer = async function () {
  const { name, ID, email, github } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Employee's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the employee's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's github username?",
    },
  ]);
  const newEngineer = new Engineer(name, ID, email, github);
  team.push(newEngineer);
  console.log(team);
  addEmployee();
};

const addIntern = async function () {
  const { name, ID, email, school } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the Intern's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the Intern's school name?",
    },
  ]);
  const newIntern = new Intern(name, ID, email, school);
  team.push(newIntern);
  console.log(team);
  addEmployee();
};

initiateProfile();

const writeHTML = (generatedHTML) => {
  fs.writeFile("./dist/index.HTML", generatedHTML, (err) => {
    if (err) throw new Error(err);
  });
};
