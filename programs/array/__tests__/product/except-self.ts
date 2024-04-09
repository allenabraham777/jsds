import { productExceptSelf } from "../../src"

describe('Product of Array Except Self', () => {
    test('Case 1: [1, 2, 3, 4]', () => {
        const input = [1, 2, 3, 4];
        const output = productExceptSelf(input);
        expect(output).toEqual([24, 12, 8, 6]);
    })
    test('Case 2: [-1, 1, 0, -3, 3]', () => {
        const input = [1, 1, 0, 3, 3];
        const output = productExceptSelf(input);
        console.log(output);

        expect(output).toEqual([0, 0, 9, 0, 0]);
    })
})
