import { BinaryTreeNode } from '../node';
import { basicComparator, type Comparator } from '@js-dsa/commons';
import Queue from '@js-dsa/queue';
import Stack from '@js-dsa/stack';

export class BinaryTree<T> {
    public root: BinaryTreeNode<T> | null;

    constructor(protected comparator: Comparator<T> = basicComparator<T>) {
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
            const node = array[i++];
            const left = node ? new BinaryTreeNode(node) : null;
            curr.left = left;
            curr.left && queue.enqueue(curr.left);
            if (i < array.length) {
                const node = array[i++];
                const right = node ? new BinaryTreeNode(node) : null;
                curr.right = right;
                curr.right && queue.enqueue(curr.right);
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
        const postorder: T[] = [];
        const stack = new Stack<BinaryTreeNode<T>>();
        let prev = null;
        if (!this.root) return postorder; // Handle empty tree explicitly
        stack.push(this.root);
        let curr = stack.peek();
        while (curr && !stack.isEmpty()) {
            if (!prev || prev.left === curr || prev.right === curr) {
                if (curr?.left) {
                    stack.push(curr.left);
                } else if (curr?.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr.value);
                }
            } else if (curr.left === prev) {
                if (curr.right) {
                    stack.push(curr.right);
                } else {
                    stack.pop();
                    postorder.push(curr.value);
                }
            } else if (curr.right === prev) {
                stack.pop();
                postorder.push(curr.value);
            }
            prev = curr;
            curr = stack.peek();
        }
        return postorder;
    }
    protected findInorderSuccessorWithParent(node: BinaryTreeNode<T>) {
        if (!node.right) return { parent: null, successor: null }; // Handle no right subtree
        let parent = node.right;
        let curr = parent.left;
        while (curr?.left) {
            parent = curr;
            curr = curr.left;
        }
        return { parent, successor: curr };
    }
}
