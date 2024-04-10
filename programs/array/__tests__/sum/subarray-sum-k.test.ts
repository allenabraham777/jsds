import { subarrySumK } from '../../src/sum'

describe("Subarray Sum Equals K", () => {
    test('Case 1 => [1, 1, 1]', () => {
        const input = [1, 1, 1];
        const k = 2;
        const output = subarrySumK(input, k);
        expect(output).toBe(2);
    });
    test('Case 2 => [0, 1, 2, 3]', () => {
        const input = [0, 1, 2, 3];
        const k = 3;
        const output = subarrySumK(input, k);
        expect(output).toBe(3);
    })
})
