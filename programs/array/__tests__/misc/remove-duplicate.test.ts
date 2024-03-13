import { removeDuplicates } from "../../src";

describe("Remove Duplicates from Sorted Array", () => {
    test("Test case 1: nums => [1, 1, 2]", () => {
        const nums = [1, 1, 2];
        const output = removeDuplicates(nums);
        expect(output).toBe(2);
        expect(nums.slice(0, output)).toEqual([1, 2]);
    });
    test("Test case 2: nums => [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const output = removeDuplicates(nums);
        expect(output).toBe(5);
        expect(nums.slice(0, output)).toEqual([0, 1, 2, 3, 4]);
    });
})
