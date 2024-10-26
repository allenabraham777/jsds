import { BinaryTree } from '../src';

describe('Binary Tree', () => {
    test('Check preorder traversal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preorder = binaryTree.toPreorderArray();
        expect(preorder).toEqual([1, 2, 4, 8, 9, 5, 3, 6, 7]);
    });
    test('Check inorder traversal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preorder = binaryTree.toInorderArray();
        expect(preorder).toEqual([8, 4, 9, 2, 5, 1, 6, 3, 7]);
    });
    test('Check postorder traversal', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preorder = binaryTree.toPostorderArray();
        expect(preorder).toEqual([8, 9, 4, 5, 2, 6, 7, 3, 1]);
    });
    test('Check postorder traversal with specific tree structure', () => {
        const array = [1, 2, 3, 4];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const postorder = binaryTree.toPostorderArray();
        expect(postorder).toEqual([4, 2, 3, 1]);
    });
    test('Check postorder traversal with specific tree structure 2', () => {
        const array = [1, null, 2, null, 3, null, 4];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const postorder = binaryTree.toPostorderArray();
        expect(postorder).toEqual([4, 3, 2, 1]);
    });
});
