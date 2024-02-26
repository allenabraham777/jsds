import { BinaryTreeNode } from '../node';
import Queue from '@js-dsa/queue';
import Stack from '@js-dsa/stack';

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
    public toPreorderArray(): T[] {
        const preorder: T[] = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        const curr = this.root;
        while (curr || !stack.isEmpty()) {
            if (curr) {
                preorder.push(curr.value);
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.peek()!;
                stack.pop();
                curr = curr.right;
            }
        }
        return preorder;
    }
    public toInorderArray(): T[] {
        const inorder: T[] = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        const curr = this.root;
        while (curr || !stack.isEmpty()) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                curr = stack.peek()!;
                inorder.push(curr.value);
                stack.pop();
                curr = curr.right;
            }
        }
        return inorder;
    }
    public toPostorderArray(node = this.root): T[] {
        const postorder = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        const prev = this.root;
        stack.push(prev);
        while (!stack.isEmpty()) {
            const curr = stack.peek();
            if (!curr || prev?.left === curr || prev?.right === curr) {
                if (curr?.left) {
                    stack.push(curr.left);
                } else if (curr?.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr.value);
                }
            } else if (curr?.left == prev) {
                if (curr?.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr.value);
                }
            } else {
                stack.pop();
                postorder.push(curr.value);
            }
            prev = curr;
        }
        return postorder;
    }
}
