import { generatePascalsTriangle } from "../../src";

describe("Generate a pascals triangle for a given number of rows", () => {
    test("Test case 1: numRows => 5", () => {
        const numRows = 5;
        const output = generatePascalsTriangle(numRows);
        console.log(JSON.stringify(output))
        expect(output).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });
    test("Test case 2: numRows => 1", () => {
        const numRows = 1;
        const output = generatePascalsTriangle(numRows);
        console.log(JSON.stringify(output))
        expect(output).toEqual([[1]]);
    });
})
