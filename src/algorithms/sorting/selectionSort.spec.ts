import { it, expect, describe } from 'vitest';
import { selectionSort } from './selectionSort';

describe('selectionSort', () => {
    it('should take an array of numbers and return that array sorted in a non-decreasing order', () => {
        expect(selectionSort([])).toEqual([]);
        expect(selectionSort([1])).toEqual([1]);
        expect(selectionSort([2, 1])).toEqual([1, 2]);

        expect(selectionSort([37, 45, 29, 8, 12, 88, -3])).toEqual([
            -3, 8, 12, 29, 37, 45, 88,
        ]);

        expect(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);

        expect(selectionSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);
    });
});
