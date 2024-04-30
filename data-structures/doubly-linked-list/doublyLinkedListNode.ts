export class DoublyLinkedListNode {
    value: unknown;
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
