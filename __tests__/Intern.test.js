const Intern = require("../lib/Intern.js");

test("create Intern object", () => {
  const intern = new Intern("Dave", 7, "Dave@yahoo", "UWMadison");
  expect(intern.name).toBe("Dave");
  expect(intern.ID).toEqual(7);
  expect(intern.email).toBe("Dave@yahoo");
  expect(intern.school).toBe("UWMadison");
});
