import { basicComparator } from '@js-dsa/commons';
import { partition } from './partition';

export const quickSort = <T>(array: T[], comparator = basicComparator) => {
    const _quickSort = (array: T[], start: number, end: number) => {
        if (end <= start) return;
        const p = partition(array, start, end, comparator);
        _quickSort(array, start, p - 1);
        _quickSort(array, p + 1, end);
    };
    _quickSort(array, 0, array.length - 1);
    return array;
};
