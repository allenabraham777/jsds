export default class LinkedListNode<T> {
    private value: T;
    private next: LinkedListNode<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

    public getValue() {
        return this.value;
    }

    public getNext() {
        return this.next;
    }

    public setNext(next: LinkedListNode<T> | null) {
        this.next = next;
    }
}
