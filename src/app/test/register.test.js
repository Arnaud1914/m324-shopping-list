const { describe, test, expect } = require("@jest/globals");

describe("Simple test", () => {
    test("1 equals 1", () => {
        expect(1).toBe(1);
    });
});