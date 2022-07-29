const Manager = require("../lib/Manager.js");

test("creates a Manager object", () => {
  const manager = new Manager("Dave", 5, "dave@yahoo.com", 301);

  expect(manager.name).toBe("Dave");
  expect(manager.ID).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});

test("creates an instance of Manager", () => {
  const stats = {
    name: "dave",
    ID: 4,
    email: "gribbler25@yahoo.com",
    office: 88,
  };
  genManager(stats);
  expect(manager.name).toBe("dave");
  expect(manager.ID).toEqual(4);
  expect(manager.email).toBe("gribbler25@yahoo.com");
  expect(manager.office).toEqual(88);
});
