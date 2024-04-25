import { it, expect, describe } from 'vitest';
import { naiveStringSearch } from './naiveStringSearch';

describe('naiveStringSearch', () => {
    it('should', () => {
        expect(naiveStringSearch('I love beer', 'love')).toBe(1);
        expect(naiveStringSearch('I love doves', 'ove')).toBe(2);
        expect(naiveStringSearch('I love doves', 'obe')).toBe(0);
        expect(naiveStringSearch('lolo', 'o')).toBe(2);
    });
});
