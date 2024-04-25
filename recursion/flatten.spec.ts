import { it, expect, describe } from 'vitest';
import { flatten } from './flatten';

describe('flatten', () => {
    it('should accept a nested array and return a new array with all values flattened', () => {
        expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
        expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
        expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
        expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
    });
});
