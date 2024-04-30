import { describe, expect, it } from 'vitest';

import { sumRange } from './sumRange';

describe('sumRange', () => {
    it('should return a correct sum', () => {
        expect(sumRange(1)).toBe(1);
        expect(sumRange(3)).toBe(6);
    });
});
