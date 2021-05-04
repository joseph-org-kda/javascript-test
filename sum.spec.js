const sum = require("./sum");
describe("Test Exercise 1", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 1 + 5 + 4 to equal 10", () => {
    expect(sum(1, 5, 4)).toBe(10);
  });
});
