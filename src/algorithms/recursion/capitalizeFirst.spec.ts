import { it, expect, describe } from 'vitest';
import { capitalizeFirst } from './capitalizeFirst';

describe('capitalizeFirst', () => {
    it('given an array of strings, should capitalize the first letter of each string in the array', () => {
        expect(capitalizeFirst(['car', 'taco', 'banana'])).toEqual([
            'Car',
            'Taco',
            'Banana',
        ]);
    });
});
