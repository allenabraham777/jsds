import { baseComparator } from './utils/baseComparator';

export const bubbleSort = <T>(array: T[], comparator = baseComparator<T>): T[] => {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        const element = array[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (comparator(array[j], element) === 1) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }
        array[j + 1] = element;
    }
    return array;
};
