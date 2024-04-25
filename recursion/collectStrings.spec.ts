import { it, expect, describe } from 'vitest';
import { collectStrings } from './collectStrings';

describe('collectStrings', () => {
    const obj = {
        stuff: 'foo',
        data: {
            val: {
                thing: {
                    info: 'bar',
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: 'baz',
                        },
                    },
                },
            },
        },
    };

    it('should accept an object and return an array of all the values in the object that have a type of `string`', () => {
        expect(collectStrings(obj)).toEqual(['foo', 'bar', 'baz']);
    });
});
