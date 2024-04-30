import { it, expect, describe } from 'vitest';
import { stringifyNumbers } from './stringifyNumbers';

describe('stringifyNumbers', () => {
    const obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66,
            },
        },
    };

    const result = {
        num: '1',
        test: [],
        data: {
            val: '4',
            info: {
                isRight: true,
                random: '66',
            },
        },
    };

    it('should', () => {
        expect(stringifyNumbers(obj)).toEqual(result);
    });
});
