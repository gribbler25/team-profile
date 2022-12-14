const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, ID, email, github) {
    super(name, ID, email);
    this.github = github;
    this.title = "Engineer";
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.title;
  }
}
module.exports = Engineer;
