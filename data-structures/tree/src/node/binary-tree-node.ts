export class BinaryTreeNode<T> {
    private _value: T;
    private _left: BinaryTreeNode<T> | null;
    private _right: BinaryTreeNode<T> | null;
    constructor(value: T) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    get value() {
        return this._value;
    }

    get left() {
        return this._left;
    }

    set left(_left: BinaryTreeNode<T> | null) {
        this._left = _left;
    }

    get right() {
        return this._right;
    }

    set right(_right: BinaryTreeNode<T> | null) {
        this._right = _right;
    }

    get leftHeight(): number {
        if (!this.left) return 0;
        return this.left.height + 1;
    }

    get rightHeight(): number {
        if (!this.right) return 0;
        return this.right.height + 1;
    }

    get height(): number {
        return Math.max(this.leftHeight, this.rightHeight);
    }
}
