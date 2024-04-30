import { it, expect, describe } from 'vitest';

import { range, recursiveRange } from './range';

describe('range', () => {
    it('should add up all the numbers from 0 to the number passed to the function', () => {
        expect(range(4)).toBe(10);
        expect(range(5)).toBe(15);
    });
});

describe('recursiveRange(', () => {
    it('should add up all the numbers from 0 to the number passed to the function', () => {
        expect(recursiveRange(4)).toBe(10);
        expect(recursiveRange(5)).toBe(15);
    });
});
