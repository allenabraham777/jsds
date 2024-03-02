import { BinaryTreeNode } from '../node';
import { BinaryTree } from './binary-tree';

export class BinarySearchTree<T> extends BinaryTree<T> {
    // TODO: Add special comparator function to compare object values
    public insert(value: T) {
        const node = new BinaryTreeNode<T>(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let curr = this.root;
        while (curr) {
            if (value < curr.value) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = node;
                    break;
                }
            } else if (value > curr.value) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = node;
                }
            } else {
                break;
            }
        }
    }

    public fromArray(array: T[]): void {
        for (const item of array) {
            this.insert(item);
        }
    }

    public search(value: T) {
        let curr = this.root;
        while (curr) {
            if (curr.value === value) {
                break;
            } else if (value < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return curr;
    }
}
