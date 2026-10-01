const isPerfectSquare = require("../isPerfectSquare");

describe("isPerfectSquare", () => {
    test("returns true for a perfect square", () => {
        expect(isPerfectSquare(9)).toBe(true);
    });

    test("returns true for 16", () => {
        expect(isPerfectSquare(16)).toBe(true);
    });

    test("returns false for a non-perfect square", () => {
        expect(isPerfectSquare(10)).toBe(false);
    });

    test("returns true for 0", () => {
        expect(isPerfectSquare(0)).toBe(true);
    });

    test("returns true for 1", () => {
        expect(isPerfectSquare(1)).toBe(true);
    });

    test("returns false for a negative number", () => {
        expect(isPerfectSquare(-4)).toBe(false);
    });
});