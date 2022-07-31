const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
    this.title = "Intern";
  }
}
module.exports = Intern;
