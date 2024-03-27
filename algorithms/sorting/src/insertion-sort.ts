import { baseComparator } from './utils/baseComparator';

export const insertionSort = <T>(array: T[], comparator = baseComparator<T>): T[] => {
    const n = array.length;
    let isSwapped: boolean;
    for (let i = 0; i < n - 1; i++) {
        isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (comparator(array[j], array[j + 1]) === 1) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return array;
};
