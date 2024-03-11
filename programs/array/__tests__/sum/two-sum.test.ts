import { twoSum } from "../../src";

describe("Test two sum over unsorted array", () => {
    test("Test case 1: input => [2, 7, 11, 15], target => 9", () => {
        const input = [2, 7, 11, 15];
        const target = 9;
        const output = twoSum(input, target);
        expect(output).toEqual([0, 1]);
    });
    test("Test case 2: input => [3, 2, 4], target => 6", () => {
        const input = [3, 2, 4];
        const target = 6;
        const output = twoSum(input, target);
        expect(output).toEqual([1, 2])
    })
    test("Test case 3: input => [3, 3], target => 6", () => {
        const input = [3, 3];
        const target = 6;
        const output = twoSum(input, target);
        expect(output).toEqual([0, 1])
    })
    test("Test case 4: input => [1, 2, 3, 4, 5], target => 20", () => {
        const input = [1, 2, 3, 4, 5];
        const target = 20;
        const output = twoSum(input, target);
        expect(output).toEqual([])
    })
})
