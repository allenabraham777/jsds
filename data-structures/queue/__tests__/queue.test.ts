import Queue from '../src';

describe('Queue', () => {
    test('Check empty Queue', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
    test('Check queue enqueue', () => {
        const queue = new Queue();
        queue.fromArray([1, 2, 3, 4, 5]);
        queue.enqueue(6);
        expect(queue.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('Check queue dequeue', () => {
        const queue = new Queue();
        queue.fromArray([0, 1, 2, 3, 4, 5]);
        queue.dequeue();
        expect(queue.toArray()).toEqual([1, 2, 3, 4, 5]);
    });
    describe('Check queue peek', () => {
        test('Peek empty queue', () => {
            const queue = new Queue();
            const front = queue.peek();
            expect(front).toEqual(null);
        });
        test('Peek non empty queue', () => {
            const queue = new Queue();
            queue.fromArray([1, 2, 3, 4, 5]);
            const front = queue.peek();
            expect(front).toEqual(1);
        });
    });
});
