import { it, expect, describe } from 'vitest';
import { productOfArray, productOfArrayRecursive } from './productOfArray';

describe('productOfArray', () => {
    it('should return a correct product of array', () => {
        expect(productOfArray([1, 2, 3])).toBe(6);
        expect(productOfArray([2, 3, 4])).toBe(24);
    });
});

describe('productOfArrayRecursive', () => {
    it('should return a correct product of array', () => {
        expect(productOfArrayRecursive([1, 2, 3])).toBe(6);
        expect(productOfArrayRecursive([2, 3, 4])).toBe(24);
        expect(productOfArrayRecursive([3, 4, 5, 8])).toBe(480);
    });
});
