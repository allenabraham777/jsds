import DoublyLinkedList from '../src';

describe('Linked list', () => {
    test('Check empty DLL', () => {
        const doublyLinkedList = new DoublyLinkedList();
        expect(doublyLinkedList.isEmpty()).toBe(true);
    });
    test('Check toReverseArray function DLL', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.fromArray([9, 8, 7, 6, 5, 4]);
        expect(doublyLinkedList.toReverseArray()).toEqual([4, 5, 6, 7, 8, 9]);
    });
    test('Check append DLL', () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.append(5);
        doublyLinkedList.append(6);
        doublyLinkedList.append(7);
        expect(doublyLinkedList.toArray()).toEqual([5, 6, 7]);
    });
    test('Check prepend DLL', () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.prepend(7);
        doublyLinkedList.prepend(6);
        doublyLinkedList.prepend(5);
        expect(doublyLinkedList.toArray()).toEqual([5, 6, 7]);
    });
    describe('Check insert DLL', () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        test('Insert at empty', () => {
            doublyLinkedList.insert(4, 0);
            expect(doublyLinkedList.toArray()).toEqual([4]);
        });
        test('Insert at negative index', () => {
            doublyLinkedList.fromArray([5, 6, 7, 8, 10]);
            doublyLinkedList.insert(3, -1);
            expect(doublyLinkedList.toArray()).toEqual([3, 4, 5, 6, 7, 8, 10]);
        });
        test('Insert at index 0', () => {
            doublyLinkedList.insert(2, 0);
            expect(doublyLinkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 10]);
        });
        test('Insert at non zero index', () => {
            doublyLinkedList.insert(9, 7);
            expect(doublyLinkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
        describe('Insert at out of max range index', () => {
            test('Insert into empty DLL', () => {
                const _doublyLinkedList = new DoublyLinkedList<number>();
                _doublyLinkedList.insert(9, 20);
                expect(_doublyLinkedList.toArray()).toEqual([9]);
            });
            test('Insert into non empty DLL', () => {
                doublyLinkedList.insert(11, 20);
                expect(doublyLinkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            });
        });
    });
    describe('Check find function in DLL', () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.fromArray([5, 6, 7, 8, 10]);
        test('Find an element in empty DLL', () => {
            const _doublyLinkedList = new DoublyLinkedList<number>();
            const node = _doublyLinkedList.find(20);
            expect(node).toEqual(null);
        });
        test('Find an element not in DLL', () => {
            const node = doublyLinkedList.find(20);
            expect(node).toEqual(null);
        });
        test('Find an element in DLL', () => {
            const node = doublyLinkedList.find(6);
            expect(node?.getValue()).toEqual(6);
            expect(node?.getNext()?.getValue()).toEqual(7);
        });
    });
    describe('Check delete function in DLL', () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.fromArray([5, 6, 7, 8, 9, 10]);
        test('Delete an element in empty DLL', () => {
            const _doublyLinkedList = new DoublyLinkedList<number>();
            const node = _doublyLinkedList.delete(5);
            expect(node).toEqual(null);
        });
        test('Delete the head element', () => {
            doublyLinkedList.delete(5);
            expect(doublyLinkedList.toArray()).toEqual([6, 7, 8, 9, 10]);
        });
        test('Delete non head element', () => {
            doublyLinkedList.delete(9);
            expect(doublyLinkedList.toArray()).toEqual([6, 7, 8, 10]);
        });
        test('Delete an element in list of size 1', () => {
            const _doublyLinkedList = new DoublyLinkedList<number>();
            _doublyLinkedList.fromArray([9]);
            _doublyLinkedList.delete(9);
            expect(_doublyLinkedList.toArray()).toEqual([]);
        });
    });
    describe('Check deleteHead function in DLL', () => {
        test('Delete head in empty DLL', () => {
            const _doublyLinkedList = new DoublyLinkedList<number>();
            const node = _doublyLinkedList.deleteHead();
            expect(node).toEqual(null);
        });
        test('Delete head in a DLL with on element', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            doublyLinkedList.fromArray([5]);
            doublyLinkedList.deleteHead();
            expect(doublyLinkedList.toArray()).toEqual([]);
        });
        test('Delete head in a DLL with many elements', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            doublyLinkedList.fromArray([5, 6, 7, 8, 9, 10]);
            doublyLinkedList.deleteHead();
            expect(doublyLinkedList.toArray()).toEqual([6, 7, 8, 9, 10]);
        });
    });
    describe('Check deleteTail function in DLL', () => {
        test('Delete tail in a DLL with no elements', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            const node = doublyLinkedList.deleteTail();
            expect(node).toEqual(null);
        });
        test('Delete tail in a DLL with one element', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            doublyLinkedList.fromArray([5]);
            doublyLinkedList.deleteTail();
            expect(doublyLinkedList.toArray()).toEqual([]);
        });
        test('Delete tail in a DLL with many elements', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            doublyLinkedList.fromArray([5, 6, 7, 8, 9, 10]);
            doublyLinkedList.deleteTail();
            expect(doublyLinkedList.toArray()).toEqual([5, 6, 7, 8, 9]);
        });
    });
});
