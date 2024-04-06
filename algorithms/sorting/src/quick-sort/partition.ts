import { type BaseComparatorFn } from '../utils/baseComparator';
import { swap } from '../utils/swap';

export const partition = <T>(
    array: T[],
    start: number,
    end: number,
    comparator: BaseComparatorFn<T>
) => {
    const pivot = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (comparator(array[j], pivot) === -1) {
            i++;
            swap(array, array, i, j);
        }
    }

    i++;

    swap(array, array, i, end);

    return i;
};
