import { baseComparator } from './utils/baseComparator';

export const insertionSort = <T>(array: T[], comparator = baseComparator<T>): T[] => {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        const element = array[i];
        let j;
        for (j = i - 1; j >= 0 && comparator(array[j], element) === 1; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = element;
    }
    return array;
};
