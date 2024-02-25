import { BinaryTreeNode } from '../node';
import Queue from '@js-dsa/queue';

export class BinaryTree<T> {
    public root: BinaryTreeNode<T> | null;
    constructor() {
        this.root = null;
    }
    public fromArray(array: T[]) {
        if (!array.length) return;
        const _root = new BinaryTreeNode(array[0]);
        const queue = new Queue<BinaryTreeNode<T>>();
        queue.enqueue(_root);
        let i = 1;
        while (i < array.length && queue.peek()) {
            const curr = queue.peek()!;
            queue.dequeue();
            const left = new BinaryTreeNode(array[i++]);
            curr.left = left;
            queue.enqueue(curr.left);
            if (i < array.length) {
                const right = new BinaryTreeNode(array[i++]);
                curr.right = right;
                queue.enqueue(curr.right);
            }
        }
    }
    public toPreorderArray(node = this.root): T[] {
        if (!node) return [];
        return [
            node.value,
            ...this.toPreorderArray(node.left),
            ...this.toPreorderArray(node.right)
        ];
    }
    public toInorderArray(node = this.root): T[] {
        if (!node) return [];
        return [...this.toInorderArray(node.left), node.value, ...this.toInorderArray(node.right)];
    }
    public toPostorderArray(node = this.root): T[] {
        if (!node) return [];
        return [
            ...this.toPostorderArray(node.left),
            ...this.toPostorderArray(node.right),
            node.value
        ];
    }
}
