import { it, expect, describe } from 'vitest';
import { MaxBinaryHeap } from './maxBinaryHeap';

describe('MaxBinaryHeap', () => {
    const heap = new MaxBinaryHeap();

    it('should instantiate an object with `values` property that is an empty array', () => {
        expect(heap.values).toEqual([]);
    });

    describe('insert', () => {
        it('should insert values in a correct place (random values)', () => {
            const heap = new MaxBinaryHeap();
            heap.insert(9);
            expect(heap.values).toEqual([9]);
            heap.insert(16);
            expect(heap.values).toEqual([16, 9]);
            heap.insert(41);
            expect(heap.values).toEqual([41, 9, 16]);
            heap.insert(11);
            expect(heap.values).toEqual([41, 11, 16, 9]);
            heap.insert(21);
            expect(heap.values).toEqual([41, 21, 16, 9, 11]);
            heap.insert(64);
            expect(heap.values).toEqual([64, 21, 41, 9, 11, 16]);
        });

        it('should insert values in a correct place (sorted values from max to min)', () => {
            const heap = new MaxBinaryHeap();
            heap.insert(41);
            expect(heap.values).toEqual([41]);
            heap.insert(16);
            expect(heap.values).toEqual([41, 16]);
            heap.insert(9);
            expect(heap.values).toEqual([41, 16, 9]);
        });
    });

    describe('extractRoot', () => {
        it('should correctly operate on an empty heap', () => {
            const heap = new MaxBinaryHeap();
            expect(heap.values).toEqual([]);
            expect(heap.extractMax()).toBeUndefined();
            expect(heap.values).toEqual([]);
        });

        it('should correctly operate on a heap with a single value stored', () => {
            const heap = new MaxBinaryHeap();
            heap.insert(9);
            expect(heap.values).toEqual([9]);
            expect(heap.extractMax()).toBe(9);
            expect(heap.values).toEqual([]);
        });

        it('should correctly operate on a random size heap', () => {
            const heap = new MaxBinaryHeap();
            heap.insert(9);
            heap.insert(16);
            heap.insert(41);
            heap.insert(11);
            heap.insert(21);
            expect(heap.values).toEqual([41, 21, 16, 9, 11]);
            expect(heap.extractMax()).toBe(41);
            expect(heap.values).toEqual([21, 11, 16, 9]);
        });
    });
});
