import { SinglyLinkedListNode } from './singlyLinkedListNode';

export class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toArray() {
        const arr = [];
        let node = this.head;

        while (node !== null) {
            arr.push(node.value);
            node = node.next;
        }

        return arr;
    }

    push(value: unknown) {
        const newNode = new SinglyLinkedListNode(value);

        if (this.head === null) {
            this.head = newNode;
        }

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (!this.head || !this.tail) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const oldHead = this.head!;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null; // cleanup
        }

        this.length--;

        return oldHead;
    }

    unshift(value: unknown) {
        const newNode = new SinglyLinkedListNode(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }

        this.length++;
        return this;
    }

    getByIndex(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current?.next ?? null;
        }

        return current;
    }

    set(index: number, value: unknown) {
        const node = this.getByIndex(index);

        if (!node) {
            return false;
        }

        node.value = value;
        return true;
    }

    insert(index: number, value: unknown) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const newNode = new SinglyLinkedListNode(value);
            const prev = this.getByIndex(index - 1)!;
            const next = prev.next;
            prev.next = newNode;
            newNode.next = next;
            this.length++;
        }

        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prev = this.getByIndex(index - 1)!;
        const nodeToDelete = prev.next!;
        prev.next = nodeToDelete.next!;
        this.length--;
        return nodeToDelete;
    }

    reverse() {
        if (this.length === 0 || this.length === 1) {
            return this;
        }

        let current = this.head!;
        let temp: SinglyLinkedListNode | null;
        let prev: SinglyLinkedListNode | null = null;

        while (current) {
            temp = current.next; // before updating next pointer for a current node save `current.next` to a `temp` variable
            current.next = prev; // update next pointer
            prev = current; // make `current` (with already updated next pointer) a new `prev`

            if (!temp) {
                // when at the end of the list, swap the head and the tail and stop the loop
                this.tail = this.head;
                this.head = current;
                break;
            }

            current = temp; // otherwise set new `current` to `temp` (an old `current.next`) and perform the next iteration
        }

        return this;
    }
}
