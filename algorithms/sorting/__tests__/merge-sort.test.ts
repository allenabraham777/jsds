import { mergeSort } from '../src';

describe('Merge sort', () => {
    test("Test average case: input => [5, 3, 2, 1, 8, 9, 6, 4, 7]", () => {
        const input = [5, 3, 2, 1, 8, 9, 6, 4, 7];
        mergeSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("Test sorted case: input => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
        mergeSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
    });
    test("Test decreasing order case: input => [9, 8, 7, 6, 5, 4, 3, 2, 1]", () => {
        const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        mergeSort(input);
        expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test("Test custom comparator: input => [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const comparator = (a: number, b: number) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        }
        mergeSort<number>(input, comparator);
        expect(input).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});
