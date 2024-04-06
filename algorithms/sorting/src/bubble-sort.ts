import { baseComparator } from './utils/baseComparator';
import { swap } from './utils/swap';

export const bubbleSort = <T>(array: T[], comparator = baseComparator<T>): T[] => {
    const n = array.length;
    let isSwapped: boolean;
    for (let i = 0; i < n - 1; i++) {
        isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (comparator(array[j], array[j + 1]) === 1) {
                swap(array, array, j, j + 1);
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return array;
};
