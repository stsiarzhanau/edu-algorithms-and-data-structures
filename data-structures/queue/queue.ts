import { QueueNode } from './queueNode';

export class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    toArray() {
        const arr = [];
        let node = this.first;

        while (node !== null) {
            arr.push(node.value);
            node = node.next;
        }

        return arr;
    }

    enqueue(value: unknown) {
        // SLL `push` method logic is used (slightly modified to use a new size as a return value)
        const newNode = new QueueNode(value);

        if (!this.first) {
            this.first = newNode;
        }

        if (this.last) {
            this.last.next = newNode;
        }

        this.last = newNode;
        // this.size++;
        // return this.size;
        return ++this.size;
    }

    dequeue() {
        // SSL `shift` logic is used
        if (this.size === 0) {
            return undefined;
        }

        const oldFirst = this.first!;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
            oldFirst.next = null; // cleanup
        }

        this.size--;
        return oldFirst;
    }
}
