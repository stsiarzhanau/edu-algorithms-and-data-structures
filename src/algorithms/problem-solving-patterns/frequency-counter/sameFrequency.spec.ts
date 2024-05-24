import { it, expect, describe } from 'vitest';
import { sameFrequency } from './sameFrequency';

describe('sameFrequency', () => {
    it('should take 2 positive integers and return `true` if this 2 numbers have the same frequency of digits', () => {
        expect(sameFrequency(182, 281)).toBe(true);
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });

    it('should return `false` otherwise', () => {
        expect(sameFrequency(34, 14)).toBe(false);
        expect(sameFrequency(22, 222)).toBe(false);
    });
});
