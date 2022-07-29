const Manager = require("../lib/Manager.js");

test("creates a Manager object", () => {
  const manager = new Manager("Dave", 5, "dave@yahoo.com", 301);

  expect(manager.name).toBe("Dave");
  expect(manager.ID).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});
