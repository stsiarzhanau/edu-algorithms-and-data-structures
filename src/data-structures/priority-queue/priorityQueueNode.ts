export class PriorityQueueNode {
    value: unknown;
    priority: number;
    /* To dequeue nodes with the same priority in correct (insertion order) */
    timestamp: number;

    constructor(value: unknown, priority: number) {
        this.value = value;
        this.priority = priority;
        /**
         * performance.now() is used to prevent timestamp collisions when nodes
         * are enqueueed with high frequency (like in unit tests)
         */
        this.timestamp = performance.now();
    }
}
