import { it, expect, describe } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    it('should take a sorted array of numbers and a number and return index of number (first occurence) if it is found in an array or -1 otherwise', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        expect(
            binarySearch(
                [
                    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84,
                    86, 95, 96, 98, 99,
                ],
                11,
            ),
        ).toBe(-1);
        expect(
            binarySearch(
                [
                    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84,
                    86, 95, 96, 98, 99,
                ],
                95,
            ),
        ).toBe(16);
        expect(
            binarySearch(
                [
                    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84,
                    86, 95, 96, 98, 99,
                ],
                100,
            ),
        ).toBe(-1);
    });
});
