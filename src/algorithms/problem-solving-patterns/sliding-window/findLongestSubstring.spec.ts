import { it, expect, describe } from 'vitest';
import { findLongestSubstring } from './findLongestSubstring';

describe('findLongestSubstring', () => {
    it('should accept a string and return the length of the longest substring with all distinct characters', () => {
        expect(findLongestSubstring('')).toBe(0);
        expect(findLongestSubstring('a')).toBe(1);
        expect(findLongestSubstring('abb')).toBe(2);
        expect(findLongestSubstring('rithmschool')).toBe(7);
        expect(findLongestSubstring('thisisawesome')).toBe(6);
        expect(findLongestSubstring('thecatinthehat')).toBe(7);
        expect(findLongestSubstring('bbbbbb')).toBe(1);
        expect(findLongestSubstring('longestsubstring')).toBe(8);
        expect(findLongestSubstring('thisishowwedoit')).toBe(6);
    });
});
