const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, ID, email, office) {
    super(name, ID, email);
    this.office = office;
    // this.#officeNum = office;
    this.title = "Manager";
  }
  // getofficeNum() {
  //   return this.#officeNum;
  // }

  getRole() {
    return this.title;
  }
}

module.exports = Manager;
