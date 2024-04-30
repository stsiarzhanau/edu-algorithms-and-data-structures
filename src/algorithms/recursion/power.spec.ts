import { describe, expect, it } from 'vitest';

import { power, powerRecursive } from './power';

describe('power', () => {
    it('should return correct number', () => {
        expect(power(2, 1)).toBe(2);
        expect(power(2, 4)).toBe(16);
    });
});

describe('powerRecursive', () => {
    it('should return correct number', () => {
        expect(powerRecursive(2, 1)).toBe(2);
        expect(powerRecursive(2, 4)).toBe(16);
        expect(powerRecursive(3, 3)).toBe(27);
    });
});
