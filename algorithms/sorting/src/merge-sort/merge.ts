import { type BaseComparatorFn } from '../utils/baseComparator';
import { swap } from '../utils/swap';

export const mergeInplaceAfterSorting = <T>(
    array: T[],
    leftStart: number,
    rightStart: number,
    leftLength: number,
    rightLength: number,
    comparator: BaseComparatorFn<T>
) => {
    let gap = Math.ceil((leftLength + rightLength) / 2);
    while (gap > 0) {
        let left = leftStart;
        let right = leftStart + gap;
        while (right < rightStart + rightLength) {
            if (comparator(array[left], array[right]) === 1) {
                swap(array, array, left, right);
            }
            left++;
            right++;
        }
        if (gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
};
