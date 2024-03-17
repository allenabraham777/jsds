import { AvlTree } from "../src";

describe("Avl Tree", () => {
    test("Check tree creation", () => {
        const array = [5, 8, 1, 2, 4, 3, 9, 7, 6];
        const avl = new AvlTree();
        avl.fromArray(array);
        expect(avl.root?.value).toBe(4);
    })
    test("Check LL rotation", () => {
        const array = [50, 80, 10, 20, 40, 30, 90, 70, 60];
        const avl = new AvlTree();
        avl.fromArray(array);
        expect(avl.root?.value).toBe(40);
        avl.insert(49);
        expect(avl.root?.right?.value).toBe(60);
    })
    test("Check LR rotation", () => {
        const array = [40, 20, 50, 10, 30, 60, 5, 25, 36];
        const avl = new AvlTree();
        avl.fromArray(array);
        expect(avl.root?.value).toBe(40);
        avl.insert(27)
        expect(avl.root?.value).toBe(30);
    })
    test("Check RR rotation", () => {
        const array = [10, 20];
        const avl = new AvlTree();
        avl.fromArray(array);
        expect(avl.root?.value).toBe(10);
        avl.insert(30)
        expect(avl.root?.value).toBe(20);
    })
    test("Check RL rotation", () => {
        const array = [10, 20];
        const avl = new AvlTree();
        avl.fromArray(array);
        expect(avl.root?.value).toBe(10);
        avl.insert(15)
        expect(avl.root?.value).toBe(15);
    })
})
