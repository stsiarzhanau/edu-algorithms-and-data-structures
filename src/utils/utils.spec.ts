import { it, expect, describe, beforeEach } from 'vitest';
import {
    removeItemWithSlice,
    swap,
    merge,
    pivot,
    getDigit,
    digitCount,
    mostDigits,
} from '.';

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

describe('swap', () => {
    it('should take an array and 2 indices and swap array items at that indices', () => {
        const arr = [4, 6, 8, 10];
        swap(arr, 1, 2);
        expect(arr).toEqual([4, 8, 6, 10]);
    });
});

describe('merge', () => {
    it(`should take two sorted arrays and return an array which is also sorted and consists of all
    of the elements in the two input arrays`, () => {
        expect(merge([], [])).toEqual([]);
        expect(merge([], [1])).toEqual([1]);
        expect(merge([1], [])).toEqual([1]);
        expect(merge([1, 5], [2, 4])).toEqual([1, 2, 4, 5]);
        expect(merge([1, 4, 6, 8], [3, 9])).toEqual([1, 3, 4, 6, 8, 9]);
        expect(merge([3, 9], [1, 4, 6, 8])).toEqual([1, 3, 4, 6, 8, 9]);
        expect(merge([2, 3, 9], [1, 2, 4, 6, 8])).toEqual([
            1, 2, 2, 3, 4, 6, 8, 9,
        ]);
    });
});

describe('pivot', () => {
    let arr: number[];

    beforeEach(() => {
        arr = [5, 7, 2, 9, 4];
    });

    it('should correctly rearrange array items in-place', () => {
        expect(pivot(arr)).toBe(2);
        expect(arr).toEqual([4, 2, 5, 9, 7]);
    });

    it('should return the correct index of the pivot after items are rearranged', () => {
        expect(pivot(arr)).toBe(2);
        expect(pivot([5])).toBe(0);
        // expect(pivot([])).toBe(-1);
    });
});

describe('getDigit', () => {
    it('should take an integer number and an index (zero based, right to left) and return a digit at that position', () => {
        expect(getDigit(98624, 0)).toBe(4);
        expect(getDigit(98624, 1)).toBe(2);
        expect(getDigit(98624, 2)).toBe(6);
        expect(getDigit(98624, 3)).toBe(8);
        expect(getDigit(98624, 4)).toBe(9);
    });

    it('should return zero if index is out of the range', () => {
        expect(getDigit(98624, 5)).toBe(0);
    });

    it('should work with negative integers', () => {
        expect(getDigit(-98624, 2)).toBe(6);
    });
});

describe('digitCount', () => {
    it('should take an integer and return a number of digits it contains', () => {
        expect(digitCount(98624)).toBe(5);
        expect(digitCount(33)).toBe(2);
        expect(digitCount(0)).toBe(1);
    });

    it('should work with negative integers', () => {
        expect(digitCount(-98624)).toBe(5);
    });
});

describe('mostDigits', () => {
    it('should take an integer and return a number of digits it contains', () => {
        expect(mostDigits([1, 3, 33, -4587, 456, 3224, 98624, 44386])).toBe(5);
        expect(mostDigits([1, 3, 33])).toBe(2);
        expect(mostDigits([1, 3])).toBe(1);
        expect(mostDigits([0])).toBe(1);
        expect(mostDigits([])).toBe(0);
    });
});
