import DoublyLinkedListNode from './doubly-linked-list-node';

export default class DoublyLinkedList<T> {
    private head: DoublyLinkedListNode<T> | null;
    private tail: DoublyLinkedListNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public isEmpty() {
        return !this.head;
    }

    public prepend(value: T) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head.setPrevious(newNode);
            this.head = newNode;
        }
        return this;
    }

    public append(value: T) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            newNode.setPrevious(this.tail);
            this.tail = newNode;
        }
        return this;
    }

    public insert(value: T, index: number) {
        const newNode = new DoublyLinkedListNode(value);
        const _index = index < 0 ? 0 : index;
        let currentNode = this.head;
        let i = 0;
        if (_index === 0) {
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.setPrevious(newNode);
                newNode.setNext(this.head);
                this.head = newNode;
            }
            return this;
        }
        while (currentNode) {
            if (i === _index) break;
            i++;
            currentNode = currentNode.getNext();
        }
        if (currentNode) {
            const prev = currentNode.getPrevious();
            prev!.setNext(newNode);
            newNode.setPrevious(prev);
            currentNode.setPrevious(newNode);
            newNode.setNext(currentNode);
        } else {
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail!.setNext(newNode);
                newNode.setPrevious(this.tail);
                this.tail = newNode;
            }
        }
        return this;
    }

    public find(value: T) {
        if (!this.head) return null;
        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        while (currentNode) {
            if (currentNode.getValue() === value) {
                break;
            }
            currentNode = currentNode.getNext();
        }
        if (currentNode) return currentNode;
        return null;
    }

    public delete(value: T) {
        if (!this.head) return null;
        let deletedNode: DoublyLinkedListNode<T> | null = null;
        if (this.head.getValue() === value) {
            deletedNode = this.head;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head.getNext()!.setPrevious(null);
                this.head = this.head.getNext();
            }
            deletedNode.setNext(null);
        } else {
            let currentNode: DoublyLinkedListNode<T> | null = this.head;
            while (currentNode) {
                if (currentNode.getValue() === value) break;
                currentNode = currentNode.getNext();
            }
            if (currentNode) {
                deletedNode = currentNode;
                currentNode.getPrevious()!.setNext(currentNode.getNext());
                currentNode.getNext()!.setPrevious(currentNode.getPrevious());
                currentNode.setPrevious(null);
                currentNode.setNext(null);
            }
        }
        return deletedNode;
    }

    public deleteHead() {
        if (!this.head) return null;
        const deletedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.getNext();
            this.head!.setPrevious(null);
        }
        deletedNode.setNext(null);
        return deletedNode;
    }

    public deleteTail() {
        if (!this.head) return null;
        const deletedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.getPrevious();
            this.tail!.setNext(null);
        }
        if (deletedNode) {
            deletedNode.setPrevious(null);
        }
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

    public toReverseArray() {
        const array = [];
        let currentNode = this.tail;
        while (currentNode) {
            array.push(currentNode.getValue());
            currentNode = currentNode.getPrevious();
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
