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
        this.root = new BinaryTreeNode(array[0]);
        const queue = new Queue<BinaryTreeNode<T>>();
        queue.enqueue(this.root);
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
    // Node -> Left -> Right
    public toPreorderArray(): T[] {
        const preorder: T[] = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        let curr = this.root;
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
    // Left -> Node -> Right
    public toInorderArray(): T[] {
        const inorder: T[] = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        let curr = this.root;
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
    // Left -> Right -> Node
    public toPostorderArray(): T[] {
        const postorder = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        let prev = null;
        if (this.root) stack.push(this.root);
        while (!stack.isEmpty()) {
            const curr = stack.peek();
            if (!prev || prev.left === curr || prev.right === curr) {
                if (curr?.left) {
                    stack.push(curr.left);
                } else if (curr?.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr!.value);
                }
            } else if (curr?.left === prev) {
                if (curr?.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr.value);
                }
            } else if (curr?.right === prev) {
                stack.pop();
                postorder.push(curr.value);
            }
            prev = curr;
        }
        return postorder;
    }
}
