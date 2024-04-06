import { baseComparator } from '../utils/baseComparator';
import { mergeInplaceAfterSorting } from './merge';

export const mergeSort = <T>(array: T[], comparator = baseComparator<T>) => {
    let p;
    const n = array.length;
    for (p = 2; p <= n; p *= 2) {
        for (let i = 0; i + p - 1 < n; i += p) {
            const left = i;
            const end = i + p;
            const right = Math.floor((left + end) / 2);
            mergeInplaceAfterSorting(array, left, right, right - left, end - right, comparator);
        }
    }
    if (p / 2 < n) {
        const right = Math.ceil(p / 2);
        mergeInplaceAfterSorting(array, 0, right, right, n - right, comparator);
    }
};
