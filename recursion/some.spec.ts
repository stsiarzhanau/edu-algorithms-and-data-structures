import { it, expect, describe } from 'vitest';
import { some } from './some';

describe('some', () => {
    it('should accept an array and a callback and should return `true` if a callback returns `true` at least once when called with any array item. Otherwise should return false.', () => {
        const isOdd = (val: number) => val % 2 !== 0;

        expect(some([1, 2, 3, 4], isOdd)).toBe(true);
        expect(some([4, 6, 8, 9], isOdd)).toBe(true);
        expect(some([4, 6, 8], isOdd)).toBe(false);
        expect(some([4, 6, 8], (val: number) => val > 10)).toBe(false);
    });
});
