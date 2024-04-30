export class QueueNode {
    value: unknown;
    next: QueueNode | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
    }
}
