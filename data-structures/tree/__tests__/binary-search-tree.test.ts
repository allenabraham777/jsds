import { BinarySearchTree } from "../src";

describe("Binary Search Tree", () => {
    test("Check tree creation", () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        const preorder = bst.toInorderArray();
        expect(preorder).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
    test("Check tree serach", () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        const node = bst.search(4);
        expect(node?.value).toBe(4);
        const node2 = bst.search(10);
        expect(node2).toBe(null);
    })
    test("Check tree insert", () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const bst = new BinarySearchTree();
        bst.fromArray(array);
        bst.insert(20);
        bst.insert(-1);
        bst.insert(5)
        const preorder = bst.toInorderArray()
        expect(preorder).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20]);
    })
})
