import { it, expect, describe } from 'vitest';
import { areThereDuplicates } from './areThereDuplicates';

describe('group', () => {
    it('should accept a variable number of arguments and return `true` if there are any duplicates among them', () => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true);
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });

    it('should return `false` otherwise', () => {
        expect(areThereDuplicates()).toBe(false);
        expect(areThereDuplicates(1)).toBe(false);
        expect(areThereDuplicates(1, 2, 3)).toBe(false);
    });
});
