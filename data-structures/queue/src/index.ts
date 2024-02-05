import LinkedList from '@js-dsa/linked-list';

export default class Queue<T> {
    private linkedList: LinkedList<T>;
    constructor() {
        this.linkedList = new LinkedList<T>();
    }

    public isEmpty() {
        return this.linkedList.isEmpty();
    }

    public enqueue(value: T) {
        this.linkedList.append(value);
    }

    public dequeue() {
        this.linkedList.deleteHead();
    }

    public peek() {
        if (this.isEmpty()) return null;
        return this.linkedList._head!.getValue();
    }

    public toArray() {
        return this.linkedList.toArray();
    }

    public fromArray(array: T[]) {
        for (const element of array) {
            this.enqueue(element);
        }
    }
}
