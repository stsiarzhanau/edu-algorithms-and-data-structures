export class MaxBinaryHeap {
    values: number[];

    constructor() {
        this.values = [];
    }

    insert(value: number) {
        this.values.push(value);

        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];

            if (element <= parent) {
                break;
            }

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }

        return this.values.length;
    }

    extractMax() {
        const max = this.values[0];
        const last = this.values.pop();

        if (!last || this.values.length === 0) {
            return max;
        }

        this.values[0] = last;
        let index = 0;

        // eslint-disable-next-line
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            const leftChild = this.values[leftChildIndex] ?? -1;
            const rightChild = this.values[rightChildIndex] ?? -1;
            const maxChild = Math.max(leftChild, rightChild);

            if (maxChild > last) {
                const maxChildIndex =
                    leftChild > rightChild ? leftChildIndex : rightChildIndex;

                this.values[index] = maxChild;
                this.values[maxChildIndex] = last;
                index = maxChildIndex;
            } else {
                break;
            }
        }

        return max;
    }
}
