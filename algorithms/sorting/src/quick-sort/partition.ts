import { type BaseComparatorFn } from '../utils/baseComparator';

export const partition = <T>(
    array: T[],
    start: number,
    end: number,
    comparator: BaseComparatorFn<T>
) => {
    const pivot = array[end];
    let i = start - 1;
    let temp;

    for (let j = start; j <= end - 1; j++) {
        if (comparator(array[j], pivot) === -1) {
            i++;
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    i++;

    temp = array[i];
    array[i] = array[end];
    array[end] = temp;

    return i;
};
