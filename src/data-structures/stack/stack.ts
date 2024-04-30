import { StackNode } from './stackNode';

export class Stack {
    first: StackNode | null;
    last: StackNode | null;
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

    push(value: unknown) {
        // actually use `unshift` code as it is more efficient (no need to traverse the list)
        const newNode = new StackNode(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }

        // this.size++;
        // return this.size;
        return ++this.size;
    }

    pop() {
        // actually use `shift` code as it is more efficient (no need to traverse the list)
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
