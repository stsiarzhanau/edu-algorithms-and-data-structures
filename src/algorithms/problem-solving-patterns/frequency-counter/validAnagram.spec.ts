import { it, expect, describe } from 'vitest';
import { validAnagram } from './validAnagram';

describe('validAnagram', () => {
    it('should take two strings (single words) and return `true` if the second string is an anagram of first', () => {
        expect(validAnagram('', '')).toBe(true);
        expect(validAnagram('elbow', 'below')).toBe(true);
        expect(validAnagram('state', 'taste')).toBe(true);
        expect(validAnagram('nigth', 'thing')).toBe(true);
    });

    it('should return false otherwise', () => {
        expect(validAnagram('boogie', 'woogie')).toBe(false);
    });

    it('should be case insensitive', () => {
        expect(validAnagram('ELBOW', 'below')).toBe(true);
    });
});
