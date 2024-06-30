import { it, expect, describe } from 'vitest';
import { mergeSort } from './mergeSort';

describe('mergeSort', () => {
    it('should take an array of numbers and return that array sorted in a non-decreasing order', () => {
        expect(mergeSort([])).toEqual([]);
        expect(mergeSort([1])).toEqual([1]);
        expect(mergeSort([2, 1])).toEqual([1, 2]);

        expect(mergeSort([37, 45, 29, 8, 12, 88, -3])).toEqual([
            -3, 8, 12, 29, 37, 45, 88,
        ]);

        expect(mergeSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);

        expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);
    });
});
