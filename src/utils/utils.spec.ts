import { it, expect, describe } from 'vitest';
import { removeItemWithSlice } from './utils';

describe('removeItemWithSlice', () => {
    it('should remove item wiht the specified index from the specified array and return the new array', () => {
        const arr1 = [6, 4, 13];
        expect(removeItemWithSlice(arr1, 0)).toEqual([4, 13]);
        expect(removeItemWithSlice(arr1, 1)).toEqual([6, 13]);
        expect(removeItemWithSlice(arr1, 2)).toEqual([6, 4]);
    });

    it('should return the copy of the specified array if the specified index is incorrect', () => {
        const arr1 = [6, 4, 13];
        expect(removeItemWithSlice(arr1, -1)).toEqual([6, 4, 13]);
        expect(removeItemWithSlice(arr1, 3)).toEqual([6, 4, 13]);
    });
});
