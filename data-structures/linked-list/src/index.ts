import LinkedListNode from './linked-list-node';

export default class LinkedList<T> {
    private head: LinkedListNode<T> | null = null;
    private tail: LinkedListNode<T> | null = null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    public prepend(value: T) {
        const newNode = new LinkedListNode(value);
        newNode.setNext(this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    public append(value: T) {
        const newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.setNext(newNode);
            this.tail = newNode;
        }
        return this;
    }

    public insert(value: T, index: number) {
        const newNode = new LinkedListNode(value);
        const _index = index < 0 ? 0 : index;
        if (_index === 0) {
            this.prepend(value);
        } else {
            let count = 1;
            let currentNode = this.head;
            while (currentNode) {
                if (count === _index) break;
                currentNode = currentNode.getNext();
                count++;
            }
            if (currentNode) {
                newNode.setNext(currentNode.getNext());
                currentNode.setNext(newNode);
            } else {
                if (this.tail) {
                    this.tail.setNext(newNode);
                    this.tail = newNode;
                } else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }
        return this;
    }

    public find(value: T) {
        if (!this.head) return null;
        let currentNode: LinkedListNode<T> | null = this.head;
        while (currentNode) {
            if (currentNode.getValue() === value) {
                return currentNode;
            }
            currentNode = currentNode.getNext();
        }
        return null;
    }

    public delete(value: T) {
        if (!this.head) return null;
        let deletedNode: LinkedListNode<T> | null = null;
        if (this.head.getValue() === value) {
            deletedNode = this.head;
            this.head = this.head.getNext();
            deletedNode.setNext(null);
            return deletedNode;
        }
        let currentNode = this.head;
        while (currentNode.getNext()) {
            if (currentNode.getNext()!.getValue() === value) {
                deletedNode = currentNode.getNext();
                currentNode.setNext(currentNode.getNext()!.getNext());
            } else {
                currentNode = currentNode.getNext()!;
            }
        }
        if (deletedNode) deletedNode.setNext(null);
        return deletedNode;
    }

    public deleteHead() {
        if (!this.head) return null;
        const deletedNode = this.head;
        if (this.head.getNext()) {
            this.head = this.head.getNext();
        } else {
            this.head = null;
            this.tail = null;
        }
        deletedNode.setNext(null);
        return deletedNode;
    }

    public deleteTail() {
        const deletedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedNode;
        }

        let currentNode = this.head;
        while (currentNode!.getNext()!.getNext()) {
            currentNode = currentNode!.getNext();
        }
        this.tail = currentNode;
        this.tail!.setNext(null);
        return deletedNode;
    }

    public toArray() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.getValue());
            currentNode = currentNode.getNext();
        }
        return array;
    }

    public fromArray(array: T[]) {
        for (const element of array) {
            this.append(element);
        }
        return this;
    }
}
