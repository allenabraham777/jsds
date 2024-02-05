import DoublyLinkedList from '../src';

describe('Linked list', () => {
    test('Check empty LL', () => {
        const linkedList = new DoublyLinkedList();
        expect(linkedList.toArray()).toEqual([]);
    });
    test('Check toReverseArray function LL', () => {
        const linkedList = new DoublyLinkedList();
        linkedList.fromArray([9, 8, 7, 6, 5, 4]);
        expect(linkedList.toReverseArray()).toEqual([4, 5, 6, 7, 8, 9]);
    });
    test('Check append LL', () => {
        const linkedList = new DoublyLinkedList<number>();
        linkedList.append(5);
        linkedList.append(6);
        linkedList.append(7);
        expect(linkedList.toArray()).toEqual([5, 6, 7]);
    });
    test('Check prepend LL', () => {
        const linkedList = new DoublyLinkedList<number>();
        linkedList.prepend(7);
        linkedList.prepend(6);
        linkedList.prepend(5);
        expect(linkedList.toArray()).toEqual([5, 6, 7]);
    });
    describe('Check insert LL', () => {
        const linkedList = new DoublyLinkedList<number>();
        test('Insert at empty', () => {
            linkedList.insert(4, 0);
            expect(linkedList.toArray()).toEqual([4]);
        });
        test('Insert at negative index', () => {
            linkedList.fromArray([5, 6, 7, 8, 10]);
            linkedList.insert(3, -1);
            expect(linkedList.toArray()).toEqual([3, 4, 5, 6, 7, 8, 10]);
        });
        test('Insert at index 0', () => {
            linkedList.insert(2, 0);
            expect(linkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 10]);
        });
        test('Insert at non zero index', () => {
            linkedList.insert(9, 7);
            expect(linkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
        describe('Insert at out of max range index', () => {
            test('Insert into empty LL', () => {
                const _linkedList = new DoublyLinkedList<number>();
                _linkedList.insert(9, 20);
                expect(_linkedList.toArray()).toEqual([9]);
            });
            test('Insert into non empty LL', () => {
                linkedList.insert(11, 20);
                expect(linkedList.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            });
        });
    });
    describe('Check find function in LL', () => {
        const linkedList = new DoublyLinkedList<number>();
        linkedList.fromArray([5, 6, 7, 8, 10]);
        test('Find an element in empty LL', () => {
            const _linkedList = new DoublyLinkedList<number>();
            const node = _linkedList.find(20);
            expect(node).toEqual(null);
        });
        test('Find an element not in LL', () => {
            const node = linkedList.find(20);
            expect(node).toEqual(null);
        });
        test('Find an element in LL', () => {
            const node = linkedList.find(6);
            expect(node?.getValue()).toEqual(6);
            expect(node?.getNext()?.getValue()).toEqual(7);
        });
    });
    describe('Check delete function in LL', () => {
        const linkedList = new DoublyLinkedList<number>();
        linkedList.fromArray([5, 6, 7, 8, 9, 10]);
        test('Delete an element in empty LL', () => {
            const _linkedList = new DoublyLinkedList<number>();
            const node = _linkedList.delete(5);
            expect(node).toEqual(null);
        });
        test('Delete the head element', () => {
            linkedList.delete(5);
            expect(linkedList.toArray()).toEqual([6, 7, 8, 9, 10]);
        });
        test('Delete non head element', () => {
            linkedList.delete(9);
            expect(linkedList.toArray()).toEqual([6, 7, 8, 10]);
        });
        test('Delete an element in list of size 1', () => {
            const _linkedList = new DoublyLinkedList<number>();
            _linkedList.fromArray([9]);
            _linkedList.delete(9);
            expect(_linkedList.toArray()).toEqual([]);
        });
    });
    describe('Check deleteHead function in LL', () => {
        test('Delete head in empty LL', () => {
            const _linkedList = new DoublyLinkedList<number>();
            const node = _linkedList.deleteHead();
            expect(node).toEqual(null);
        });
        test('Delete head in a LL with on element', () => {
            const linkedList = new DoublyLinkedList<number>();
            linkedList.fromArray([5]);
            linkedList.deleteHead();
            expect(linkedList.toArray()).toEqual([]);
        });
        test('Delete head in a LL with many elements', () => {
            const linkedList = new DoublyLinkedList<number>();
            linkedList.fromArray([5, 6, 7, 8, 9, 10]);
            linkedList.deleteHead();
            expect(linkedList.toArray()).toEqual([6, 7, 8, 9, 10]);
        });
    });
    describe('Check deleteTail function in LL', () => {
        test('Delete tail in a LL with no elements', () => {
            const linkedList = new DoublyLinkedList<number>();
            const node = linkedList.deleteTail();
            expect(node).toEqual(null);
        });
        test('Delete tail in a LL with one element', () => {
            const linkedList = new DoublyLinkedList<number>();
            linkedList.fromArray([5]);
            linkedList.deleteTail();
            expect(linkedList.toArray()).toEqual([]);
        });
        test('Delete tail in a LL with many elements', () => {
            const linkedList = new DoublyLinkedList<number>();
            linkedList.fromArray([5, 6, 7, 8, 9, 10]);
            linkedList.deleteTail();
            expect(linkedList.toArray()).toEqual([5, 6, 7, 8, 9]);
        });
    });
});
