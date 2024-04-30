export class SinglyLinkedListNode {
    value: unknown;
    next: SinglyLinkedListNode | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
    }
}
