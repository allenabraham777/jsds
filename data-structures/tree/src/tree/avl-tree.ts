import { BinaryTreeNode } from '../node';
import { BinarySearchTree } from './binary-search-tree';

export class AvlTree<T> extends BinarySearchTree<T> {
    private recursiveInsert(root: BinaryTreeNode<T> | null, value: T) {
        if (!root) {
            const newNode = new BinaryTreeNode(value);
            return newNode;
        }
        if (value < root.value) {
            root.left = this.recursiveInsert(root.left, value);
        } else if (value > root.value) {
            root.right = this.recursiveInsert(root.right, value);
        }

        if (root.balanceFactor === 2) {
            if (root.left!.balanceFactor === 1) {
                return this.llRotation(root);
            } else {
                return this.lrRotation(root);
            }
        } else if (root.balanceFactor === -2) {
            if (root.right!.balanceFactor === -1) {
                return this.rrRotation(root);
            } else {
                return this.rlRotation(root);
            }
        }

        return root;
    }

    insert(value: T) {
        this.root = this.recursiveInsert(this.root, value);
    }

    private llRotation(node: BinaryTreeNode<T>) {
        const nodeLeft = node.left!;
        const nodeLeftRight = nodeLeft.right;
        nodeLeft.right = node;
        node.left = nodeLeftRight;
        return nodeLeft;
    }

    private lrRotation(node: BinaryTreeNode<T>) {
        const nodeLeft = node.left!;
        const nodeLeftRight = nodeLeft.right!;
        nodeLeft.right = nodeLeftRight.left;
        node.left = nodeLeftRight.right;
        nodeLeftRight.left = nodeLeft;
        nodeLeftRight.right = node;
        return nodeLeftRight;
    }

    private rrRotation(node: BinaryTreeNode<T>) {
        const nodeRight = node.right!;
        const nodeRightLeft = nodeRight.left;
        nodeRight.left = node;
        node.right = nodeRightLeft;
        return nodeRight;
    }

    private rlRotation(node: BinaryTreeNode<T>) {
        const nodeRight = node.right!;
        const nodeRightLeft = nodeRight.left!;
        nodeRight.left = nodeRightLeft.right;
        node.right = nodeRightLeft.left;
        nodeRightLeft.left = node;
        nodeRightLeft.right = nodeRight;
        return nodeRightLeft;
    }
}
