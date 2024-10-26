import { basicComparator } from '../../src';

describe('Basic Comparator', () => {
    test('Check a < b', () => {
        const result = basicComparator(1, 2);
        expect(result).toBe(-1);
    });
    test('Check a > b', () => {
        const result = basicComparator(3, 2);
        expect(result).toBe(1);
    });
    test('Check a === b', () => {
        const result = basicComparator(3, 3);
        expect(result).toBe(0);
    });
});
