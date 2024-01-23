const { describe, expect, it } = require("@jest/globals");

function sum(a, b) {
    return a+b;
}

describe("Inital Test", () => {
    it("First unit test", () => {
        const firstArgument = 10;
        const secondArugment = 20;

        const result = sum(firstArgument, secondArugment);

        expect(result).toEqual(firstArgument + secondArugment);
    })
})