const Engineer = require("../lib/Engineer.js");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Dave", 8, "dave@yahoo", "githubuser");
  expect(engineer.name).toBe("Dave");
  expect(engineer.ID).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
