import { it, expect, describe } from 'vitest';
import { isSubsequence, isSubsequenceRecursive } from './isSubsequence';

describe('isSubsequence', () => {
    it(`should take two strings and return "true" if the characters in the first string form a isSubsequence
    of the characters in the second string`, () => {
        expect(isSubsequence('hello', 'hello world')).toBe(true);
        expect(isSubsequence('sing', 'sting')).toBe(true);
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
        expect(isSubsequence('', 'abc')).toBe(true);
        expect(isSubsequence('sing', 'isting')).toBe(true);

        expect(isSubsequenceRecursive('hello', 'hello world')).toBe(true);
        expect(isSubsequenceRecursive('sing', 'sting')).toBe(true);
        expect(isSubsequenceRecursive('abc', 'abracadabra')).toBe(true);
        expect(isSubsequenceRecursive('', 'abc')).toBe(true);
        expect(isSubsequenceRecursive('sing', 'isting')).toBe(true);
    });

    it('should return `false` otherwise', () => {
        expect(isSubsequence('abc', 'acb')).toBe(false); // order matters
        expect(isSubsequence('a', '')).toBe(false);

        expect(isSubsequenceRecursive('abc', 'acb')).toBe(false);
        expect(isSubsequenceRecursive('a', '')).toBe(false);
    });
});
