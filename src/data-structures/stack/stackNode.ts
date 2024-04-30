export class StackNode {
    value: unknown;
    next: StackNode | null;

    constructor(value: unknown) {
        this.value = value;
        this.next = null;
    }
}
