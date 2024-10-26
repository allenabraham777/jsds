import { type Comparator, utils, basicComparator } from '@js-dsa/commons';
const { swap } = utils;

export const selectionSort = <T>(
    array: T[],
    comparator: Comparator<T> = basicComparator<T>
): T[] => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (comparator(array[min], array[j]) === 1) {
                min = j;
            }
        }
        swap(array, array, i, min);
    }
    return array;
};
