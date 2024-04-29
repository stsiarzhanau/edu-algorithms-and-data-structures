import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;
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
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const oldTail = this.tail!;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev!;
            this.tail.next = null;
            oldTail.prev = null; // cleanup
        }

        this.length--;
        return oldTail;
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
            this.head = oldHead.next!;
            this.head.prev = null;
            oldHead.next = null; // cleanup
        }

        this.length--;
        return oldHead;
    }

    unshift(value: unknown) {
        const newNode = new DoublyLinkedListNode(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head!.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    getByIndex(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let current: DoublyLinkedListNode | null;

        if (index <= this.length / 2) {
            current = this.head;
            let count = 0;

            while (count !== index) {
                current = current?.next ?? null;
                count++;
            }
        } else {
            current = this.tail;
            let count = this.length - 1;

            while (count !== index) {
                current = current?.prev ?? null;
                count--;
            }
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
            const newNode = new DoublyLinkedListNode(value);
            const prev = this.getByIndex(index - 1)!;
            const next = prev.next!;
            prev.next = newNode;
            newNode.prev = prev;
            next.prev = newNode;
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

        const node = this.getByIndex(index)!;
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
        node.prev = null; // cleanup
        node.next = null; // cleanup
        this.length--;
        return node;
    }

    reverse() {
        if (this.length === 0 || this.length === 1) {
            return this;
        }

        let current = this.head!;
        let temp: DoublyLinkedListNode | null;

        while (current) {
            temp = current.next; // before updating next pointer for a current node save `current.next` to a `temp` variable
            current.next = current.prev; // update current node next pointer
            current.prev = temp; // update current node previous pointer

            if (!temp) {
                // when at the end of the list, swap the head and the tail and return the reversed list
                this.tail = this.head;
                this.head = current;
                break;
            }

            current = temp; // otherwise set new `current` to `temp` (an old `current.next`) and perform the next iteration
        }

        return this;
    }
}
