import { PriorityQueueNode } from './priorityQueueNode';

/* Min Binary Heap */
export class PriorityQueue {
    nodes: PriorityQueueNode[];

    constructor() {
        this.nodes = [];
    }

    enqueue(value: unknown, priority: number) {
        const newNode = new PriorityQueueNode(value, priority);
        this.nodes.push(newNode);
        let index = this.nodes.length - 1;
        const node = this.nodes[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.nodes[parentIndex];

            /* lower `priority` number represents higher priority */
            if (node.priority >= parent.priority) {
                break;
            }

            this.nodes[parentIndex] = node;
            this.nodes[index] = parent;
            index = parentIndex;
        }

        return this.nodes.length;
    }

    dequeue() {
        const highestPriority = this.nodes[0];
        const last = this.nodes.pop();

        if (!last || this.nodes.length === 0) {
            return highestPriority;
        }

        this.nodes[0] = last;
        let index = 0;

        // eslint-disable-next-line
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild;
            let rightChild;
            let swapIndex = -1;

            if (leftChildIndex < this.nodes.length) {
                leftChild = this.nodes[leftChildIndex];

                /* lower `priority` number represents higher priority */
                if (
                    leftChild.priority < last.priority ||
                    (leftChild.priority === last.priority &&
                        leftChild.timestamp < last.timestamp)
                ) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < this.nodes.length) {
                rightChild = this.nodes[rightChildIndex];

                /* lower `priority` number represents higher priority */
                if (
                    (swapIndex === -1 &&
                        (rightChild.priority < last.priority ||
                            (rightChild.priority === last.priority &&
                                rightChild.timestamp < last.timestamp))) ||
                    (swapIndex !== -1 &&
                        leftChild &&
                        (rightChild.priority < leftChild.priority ||
                            (rightChild.priority === leftChild.priority &&
                                rightChild.timestamp < leftChild.timestamp)))
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex !== -1) {
                this.nodes[index] = this.nodes[swapIndex];
                this.nodes[swapIndex] = last;
                index = swapIndex;
            } else {
                break;
            }
        }

        return highestPriority;
    }
}
