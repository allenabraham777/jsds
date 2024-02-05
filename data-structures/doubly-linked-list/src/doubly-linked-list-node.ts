export default class DoublyLinkedListNode<T> {
    private value: T;
    private next: DoublyLinkedListNode<T> | null;
    private previous: DoublyLinkedListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    public getValue() {
        return this.value;
    }

    public getNext() {
        return this.next;
    }

    public setNext(next: DoublyLinkedListNode<T> | null) {
        this.next = next;
    }

    public getPrevious() {
        return this.previous;
    }

    public setPrevious(previous: DoublyLinkedListNode<T> | null) {
        this.previous = previous;
    }
}
