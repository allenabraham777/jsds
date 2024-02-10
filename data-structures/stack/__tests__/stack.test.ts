import Stack from '../src';

describe('Stack', () => {
    test('Check empty Stack', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });
    test('Check stack push', () => {
        const stack = new Stack();
        stack.fromArray([5, 4, 3, 2, 1]);
        stack.push(0);
        expect(stack.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('Check stack pop', () => {
        const stack = new Stack();
        stack.fromArray([5, 4, 3, 2, 1, 0]);
        stack.pop();
        expect(stack.toArray()).toEqual([1, 2, 3, 4, 5]);
    });
    describe('Check stack peek', () => {
        test('Peek empty stack', () => {
            const stack = new Stack();
            const front = stack.peek();
            expect(front).toEqual(null);
        });
        test('Peek non empty stack', () => {
            const stack = new Stack();
            stack.fromArray([5, 4, 3, 2, 1]);
            const front = stack.peek();
            expect(front).toEqual(1);
        });
    });
});
