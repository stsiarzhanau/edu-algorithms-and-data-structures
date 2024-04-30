import { it, expect, describe } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
    it('should return `true` if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns `false`', () => {
        expect(isPalindrome('awesome')).toBe(false);
        expect(isPalindrome('foobar')).toBe(false);
        expect(isPalindrome('tacocat')).toBe(true);
        expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
        expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
        expect(isPalindrome('aba')).toBe(true);
        expect(isPalindrome('abba')).toBe(true);
    });
});
