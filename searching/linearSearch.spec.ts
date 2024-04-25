import { it, expect, describe } from 'vitest';
import { linearSearch } from './linearSearch';

describe('linearSearch', () => {
    it('should take an array of items and an item and return index of item (first occurence) if it is found in an array', () => {
        expect(linearSearch([1, 50, 100], 50)).toBe(1);
        expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5);
        expect(linearSearch([100], 100)).toBe(0);
    });

    it('should take an array of items and an item and return -1 if item is not found in an array', () => {
        expect(linearSearch([1, 50, 100], 500)).toBe(-1);
        expect(linearSearch([100], 200)).toBe(-1);
    });
});
