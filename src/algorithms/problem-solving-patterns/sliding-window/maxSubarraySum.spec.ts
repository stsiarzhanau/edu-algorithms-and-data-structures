import { it, expect, describe } from 'vitest';
import { maxSubarraySum, maxSubarraySumNaive } from './maxSubarraySum';

describe('maxSubarraySum', () => {
    it('should accept an array of integers and a count `n` and return the maximum sum of `n` consecutive elements in the array', () => {
        const arr1 = [1, 2, 5, 2, 8, 1, 5];
        const arr2 = [4, 2, 1, 6];
        const arr3 = [4, 2, 1, 6, 2];

        expect(maxSubarraySumNaive(arr1, 2)).toBe(10);
        expect(maxSubarraySumNaive(arr1, 4)).toBe(17);
        expect(maxSubarraySumNaive(arr2, 1)).toBe(6);
        expect(maxSubarraySumNaive(arr3, 4)).toBe(13);
        expect(maxSubarraySum(arr1, 2)).toBe(10);
        expect(maxSubarraySum(arr1, 4)).toBe(17);
        expect(maxSubarraySum(arr2, 1)).toBe(6);
        expect(maxSubarraySum(arr3, 4)).toBe(13);
    });

    it('should return `null` if count is greater than the array length', () => {
        expect(maxSubarraySumNaive([], 4)).toBe(null);
        expect(maxSubarraySum([], 4)).toBe(null);
    });
});
