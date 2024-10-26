import { BinarySearchTree } from '../src';

describe('Binary Search Tree', () => {
    test('Check tree creation', () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        const preorder = bst.toInorderArray();
        expect(preorder).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('Check tree serach', () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        const node = bst.search(4);
        expect(node?.value).toBe(4);
        const node2 = bst.search(10);
        expect(node2).toBe(null);
    });
    test('Check tree insert', () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        bst.insert(20);
        bst.insert(-1);
        bst.insert(5);
        const preorder = bst.toInorderArray();
        expect(preorder).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]);
    });
    test('Check tree delete', () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        let preorder = bst.toInorderArray();
        expect(preorder).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        let node = bst.deleteNode(5);
        expect(node?.value).toBe(5);
        preorder = bst.toInorderArray();
        expect(preorder).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
        node = bst.deleteNode(20);
        expect(node).toBeNull();
        expect(preorder).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
    });

    test('Delete node from empty tree returns null', () => {
        const bst = new BinarySearchTree();
        const result = bst.deleteNode(5);
        expect(result).toBeNull();
    });

    test('Delete non-existent node returns null', () => {
        const bst = new BinarySearchTree();
        bst.fromArray([5, 3, 7]);
        const result = bst.deleteNode(10);
        expect(result).toBeNull();
        expect(bst.toInorderArray()).toEqual([3, 5, 7]);
    });

    test('Delete root node with different scenarios', () => {
        const bst1 = new BinarySearchTree();
        bst1.fromArray([5, 3]);
        let node = bst1.deleteNode(5);
        expect(node?.value).toBe(5);
        expect(bst1.toInorderArray()).toEqual([3]);

        const bst2 = new BinarySearchTree();
        bst2.fromArray([5, 3, 7, 6, 8]);
        node = bst2.deleteNode(5);
        expect(node?.value).toBe(5);
        expect(bst2.toInorderArray()).toEqual([3, 6, 7, 8]);

        const bst3 = new BinarySearchTree();
        bst3.fromArray([5, 3, 6]);
        node = bst3.deleteNode(5);
        expect(node?.value).toBe(5);
        expect(bst3.toInorderArray()).toEqual([3, 6]);
    });

    test('Delete leaf nodes', () => {
        const bst = new BinarySearchTree();
        bst.fromArray([5, 3, 7, 2, 4, 6, 8]);
        let node = bst.deleteNode(2);
        expect(node?.value).toBe(2);
        expect(bst.toInorderArray()).toEqual([3, 4, 5, 6, 7, 8]);
        node = bst.deleteNode(8);
        expect(node?.value).toBe(8);
        expect(bst.toInorderArray()).toEqual([3, 4, 5, 6, 7]);
    });

    test('Delete node with one child', () => {
        const bst = new BinarySearchTree();
        bst.fromArray([5, 3, 7, 2, 6, 8]);
        let node = bst.deleteNode(3);
        expect(node?.value).toBe(3);
        expect(bst.toInorderArray()).toEqual([2, 5, 6, 7, 8]);
        node = bst.deleteNode(7);
        expect(node?.value).toBe(7);
        expect(bst.toInorderArray()).toEqual([2, 5, 6, 8]);
    });

    test('Delete node with two children', () => {
        const bst = new BinarySearchTree();
        bst.fromArray([5, 3, 7, 2, 4, 6, 8]);
        const node = bst.deleteNode(3);
        expect(node?.value).toBe(3);
        expect(bst.toInorderArray()).toEqual([2, 4, 5, 6, 7, 8]);
    });

    test('Delete node with successor having right child', () => {
        const bst = new BinarySearchTree();
        bst.fromArray([10, 5, 15, 3, 7, 13, 17, 6, 8, 14]);
        const node = bst.deleteNode(5);
        expect(node?.value).toBe(5);
        expect(bst.toInorderArray()).toEqual([3, 6, 7, 8, 10, 13, 14, 15, 17]);
    });
});
