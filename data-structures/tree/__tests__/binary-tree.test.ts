import { BinaryTree } from "../src";

describe("Binary Tree", () => {
    test("Check preoreder traversal", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preoreder = binaryTree.toPreorderArray();
        expect(preoreder).toEqual([1, 2, 4, 8, 9, 5, 3, 6, 7])
    })
    test("Check inoreder traversal", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preoreder = binaryTree.toInorderArray();
        expect(preoreder).toEqual([8, 4, 9, 2, 5, 1, 6, 3, 7])
    })
    test("Check postoreder traversal", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const binaryTree = new BinaryTree();
        binaryTree.fromArray(array);
        const preoreder = binaryTree.toPostorderArray();
        expect(preoreder).toEqual([8, 9, 4, 5, 2, 6, 7, 3, 1])
    })
})
