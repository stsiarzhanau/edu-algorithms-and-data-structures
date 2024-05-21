import { it, expect, describe } from 'vitest';
import { sumZeroNaive, sumZero } from './sumZero';

describe('sumZero', () => {
    it('should accept a sorted array of integers and return the first pair where the sum is 0.', () => {
        const arr = [-4, -3, -2, -1, 0, 1, 2, 5];
        expect(sumZeroNaive(arr)).toEqual([-2, 2]);
        expect(sumZero(arr)).toEqual([-2, 2]);
    });

    it("should return `undefined` if a pair dosn't exist", () => {
        const arr = [-2, 0, 1, 3];
        expect(sumZeroNaive(arr)).toBeUndefined();
        expect(sumZero(arr)).toBeUndefined();
    });
});
