import { it, expect, describe } from 'vitest';
import { insertionSort } from './insertionSort';

describe('insertionSort', () => {
    it('should take an array of numbers and return that array sorted in a non-decreasing order', () => {
        expect(insertionSort([])).toEqual([]);
        expect(insertionSort([1])).toEqual([1]);
        expect(insertionSort([2, 1])).toEqual([1, 2]);

        expect(insertionSort([37, 45, 29, 8, 12, 88, -3])).toEqual([
            -3, 8, 12, 29, 37, 45, 88,
        ]);

        expect(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);

        expect(insertionSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);
    });
});
