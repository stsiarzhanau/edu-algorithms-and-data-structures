import { it, expect, describe } from 'vitest';
import { sameNaive, same } from './same';

describe('same', () => {
    it(`should accept 2 arrays and return "true" if every value in the array has it's corresponding
    value squared in the second array and frequency of values is the same (order doesn't matter)`, () => {
        const arr1 = [2, 3, 5];
        const arr2 = [4, 9, 25];
        expect(sameNaive(arr1, arr2)).toBe(true);
        expect(same(arr1, arr2)).toBe(true);
    });

    it(`should return "false" if not every value in the array has it's corresponding value squared
    in the second array or frequency of values is not the same`, () => {
        const arr1 = [2, 3, 5];
        const arr2 = [2, 3, 5, 8];
        const arr3 = [4, 9, 24];
        const arr4 = [4, 9, 25, 25];
        const arr5 = [4, 9, 25];
        expect(sameNaive(arr1, arr3)).toBe(false);
        expect(sameNaive(arr1, arr4)).toBe(false);
        expect(sameNaive(arr2, arr5)).toBe(false);
        expect(same(arr1, arr3)).toBe(false);
        expect(same(arr1, arr4)).toBe(false);
        expect(same(arr2, arr5)).toBe(false);
    });
});
