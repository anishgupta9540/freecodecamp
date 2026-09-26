const { isMirror } = require("./isMirror");

describe("isMirror", () => {
  test("returns false for identical strings", () => {
    expect(isMirror("helloworld", "helloworld")).toBe(false);
  });

  test("returns true for reversed strings", () => {
    expect(isMirror("Hello World", "dlroW olleH")).toBe(true);
  });

  test("handles uppercase and lowercase correctly", () => {
    expect(isMirror("RaceCar", "raCecaR")).toBe(true);
  });

  test("returns false when strings are identical", () => {
    expect(isMirror("RaceCar", "RaceCar")).toBe(false);
  });

  test("returns false when case does not match", () => {
    expect(isMirror("Mirror", "rorrim")).toBe(false);
  });

  test("ignores hyphens", () => {
    expect(isMirror("Hello World", "dlroW-olleH")).toBe(true);
  });

  test("ignores special characters", () => {
    expect(isMirror("Hello World", "!dlroW !olleH")).toBe(true);
  });
});