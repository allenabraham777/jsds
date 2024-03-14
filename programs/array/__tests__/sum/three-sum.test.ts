import { threeSum } from "../../src";

describe("Test three sum over unsorted array", () => {
    test("Test case 1: input => [-1, 0, 1, 2, -1, -4]", () => {
        const input = [-1, 0, 0, 1, 2, -1, -4];
        const output = threeSum(input);
        expect(output).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    });
    test("Test case 2: input => [0, 0, 0]", () => {
        const input = [0, 0, 0];
        const output = threeSum(input);
        expect(output).toEqual([[0, 0, 0]])
    })
    test("Test case 3: input => [0, 1, 1]", () => {
        const input = [0, 1, 1];
        const output = threeSum(input);
        expect(output).toEqual([])
    })
})
