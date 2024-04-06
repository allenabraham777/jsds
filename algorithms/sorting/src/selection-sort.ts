import { baseComparator } from './utils/baseComparator';
import { swap } from './utils/swap';

export const selectionSort = <T>(array: T[], comparator = baseComparator<T>): T[] => {
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
