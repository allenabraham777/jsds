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

    private searchWithParent(value: T) {
        let parent = null;
        let curr = this.root;
        while (curr) {
            if (curr.value === value) {
                break;
            } else if (value < curr.value) {
                parent = curr;
                curr = curr.left;
            } else {
                parent = curr;
                curr = curr.right;
            }
        }
        return { parent, node: curr };
    }

    public deleteNode(value: T) {
        if (!this.root) return null;
        const { node, parent } = this.searchWithParent(value);
        if (!node) return null;
        const { successor, parent: successorParent } = this.findInorderSuccessorWithParent(node);
        if (!parent) {
            if (!successorParent) {
                this.root = node.left;
                node.left = null;
                return node;
            } else {
                if (!successor) {
                    this.root = successorParent;
                    successorParent.left = node.left;
                } else {
                    this.root = successor;
                    successorParent.left = successor.right;
                    successor.right = node.right;
                    successor.left = node.left;
                }
                node.left = null;
                node.right = null;
                return node;
            }
        }
        const isLeft = value < parent.value;
        if (!successorParent) {
            if (node.left) {
                if (isLeft) {
                    parent.left = node.left;
                } else {
                    parent.right = node.left;
                }
            } else {
                if (isLeft) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
            node.right = null;
            node.left = null;
            return node;
        }
        if (!successor) {
            if (isLeft) {
                parent.left = successorParent;
            } else {
                parent.right = successorParent;
            }
            successorParent.left = node.left;
            node.right = null;
            node.left = null;
            return node;
        }
        successorParent.left = successor.right;
        successor.right = node.right;
        successor.left = node.left;
        if (isLeft) {
            parent.left = successor;
        } else {
            parent.right = successor;
        }
        node.left = null;
        node.right = null;
        return node;
    }
}
