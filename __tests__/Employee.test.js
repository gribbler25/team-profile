const Employee = require("../lib/Employee.js");

test("creates a new Employee object", () => {
  const employee = new Employee("sarah", "55", "gribbler25@yahoo.com");

  expect(employee.name).toBe("sarah");
  expect(employee.ID).toBe("55");
  expect(employee.email).toBe("gribbler25@yahoo.com");
});
