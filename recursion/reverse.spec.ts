import { it, expect, describe } from 'vitest';
import { reverse } from './reverse';

describe('reverse', () => {
    it('should accepts a string and return a new string in reverse.', () => {
        expect(reverse('awesome')).toBe('emosewa');
        expect(reverse('rithmschool')).toBe('loohcsmhtir');
    });
});
