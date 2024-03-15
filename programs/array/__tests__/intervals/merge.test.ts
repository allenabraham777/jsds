import { mergeIntervals } from "../../src";

describe("Merge Intervals", () => {
    test("Test case 1: intervals => [[1,3],[2,6],[8,10],[15,18]]", () => {
        const intervals = [[1, 4], [1, 3], [2, 6], [8, 10], [15, 18]];
        const output = mergeIntervals(intervals);
        expect(output).toEqual([[1, 6], [8, 10], [15, 18]]);
    });
    test("Test case 2: intervals => [[1,4],[4,5]]", () => {
        const intervals = [[1, 4], [4, 5]];
        const output = mergeIntervals(intervals);
        expect(output).toEqual([[1, 5]]);
    });
})
