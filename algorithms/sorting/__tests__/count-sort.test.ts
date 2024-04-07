import { countSort } from '../src';

describe('Bubble sort', () => {
    test("Test average case: input => [5, 3, 2, 1, 8, 9, 6, 4, 7]", () => {
        const input = [5, 3, 2, 1, 8, 9, 6, 4, 7];
        countSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("Test best case: input => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
        countSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
    });
    test("Test worst case: input => [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        countSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("Test array with negative value: input => [-1, 2, 3]", () => {
        const input = [-1, 2, 3];
        try {
            countSort(input);
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error?.message).toBe("Negative elements are not allowed in count sort");
        }
    });
    test("Test custom comparator: input => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        countSort(input, false);
        expect(input).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});
