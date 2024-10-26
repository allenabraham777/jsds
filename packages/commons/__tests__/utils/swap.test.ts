import { utils } from '../../src';

describe('Swap', () => {
    test('Swap 3rd and 6th index', () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        utils.swap(array, array, 3, 6);
        expect(array).toEqual([0, 1, 2, 6, 4, 5, 3, 7, 8, 9]);
    });
});
