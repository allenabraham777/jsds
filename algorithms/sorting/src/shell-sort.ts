import { type Comparator, utils, basicComparator } from '@js-dsa/commons';
const { swap } = utils;

export const shellSort = <T>(array: T[], comparator: Comparator<T> = basicComparator<T>) => {
    let gap = Math.ceil(array.length / 2);
    while (gap > 0) {
        for (let i = 0; i + gap < array.length; i++) {
            if (comparator(array[i], array[i + gap]) === 1) {
                swap(array, array, i, i + gap);
            }
        }
        if (gap === 1) {
            break;
        }
        gap = Math.ceil(gap / 2);
    }
    return array;
};
