export class TwoThreeTreeNode<T> {
    private _lValue: T | undefined;
    private _rValue: T | undefined;
    private _left: TwoThreeTreeNode<T> | null;
    private _middle: TwoThreeTreeNode<T> | null;
    private _right: TwoThreeTreeNode<T> | null;
    constructor() {
        this._left = null;
        this._middle = null;
        this._right = null;
        this._lValue = undefined;
        this._rValue = undefined;
    }

    get lValue() {
        return this._lValue;
    }

    set lValue(_lValue: T | undefined) {
        this._lValue = _lValue;
    }

    get rValue() {
        return this._rValue;
    }

    set rValue(_rValue: T | undefined) {
        this._rValue = _rValue;
    }

    get left() {
        return this._left;
    }

    set left(_left: TwoThreeTreeNode<T> | null) {
        this._left = _left;
    }

    get middle() {
        return this._middle;
    }

    set middle(_middle: TwoThreeTreeNode<T> | null) {
        this._middle = _middle;
    }

    get right() {
        return this._right;
    }

    set right(_right: TwoThreeTreeNode<T> | null) {
        this._right = _right;
    }

    get leftHeight(): number {
        if (!this.left) return 0;
        return this.left.height + 1;
    }

    get middleHeight(): number {
        if (!this.middle) return 0;
        return this.middle.height + 1;
    }

    get rightHeight(): number {
        if (!this.right) return 0;
        return this.right.height + 1;
    }

    get height(): number {
        return Math.max(this.leftHeight, this.middleHeight, this.rightHeight);
    }
}
