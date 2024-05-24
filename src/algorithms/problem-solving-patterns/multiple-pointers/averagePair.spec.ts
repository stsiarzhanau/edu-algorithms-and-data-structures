import { it, expect, describe } from 'vitest';
import { averagePair } from './averagePair';

describe('averagePair', () => {
    it(`should accept a sorted array of integers and a target average and return "true" if there
    is at least one pair of values in the array where the average of the pair equals the target average`, () => {
        expect(averagePair([1, 2, 3], 2.5)).toBe(true);
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
        expect(averagePair([1, 7, 7, 9], 7)).toBe(true);
    });

    it('should return `false` otherwise', () => {
        expect(averagePair([8, 9], 8)).toBe(false);
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
        expect(averagePair([], 4)).toBe(false);
    });
});
