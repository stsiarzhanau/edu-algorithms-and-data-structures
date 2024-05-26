import { it, expect, describe } from 'vitest';
import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
    it('should take an array of numbers and return that array sorted in a non-decreasing order', () => {
        expect(bubbleSort([])).toEqual([]);
        expect(bubbleSort([1])).toEqual([1]);
        expect(bubbleSort([2, 1])).toEqual([1, 2]);

        expect(bubbleSort([37, 45, 29, 8, 12, 88, -3])).toEqual([
            -3, 8, 12, 29, 37, 45, 88,
        ]);

        expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);

        expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);
    });
});
