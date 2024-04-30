import { it, expect, describe } from 'vitest';
import { capitalizeWords } from './capitalizeWords';

describe('capitalizeWords', () => {
    it('given an array of words, should return a new array containing each word capitalized.', () => {
        const words = ['i', 'am', 'learning', 'recursion'];

        expect(capitalizeWords(words)).toEqual([
            'I',
            'AM',
            'LEARNING',
            'RECURSION',
        ]);
    });
});
