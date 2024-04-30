import { it, expect, describe } from 'vitest';
import { nestedEvenSum } from './nestedEvenSum';

describe('nestedEvenSum', () => {
    const obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: 'yup',
            },
        },
    };

    const obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' },
    };

    it('should take an object and return the sum of all even numbers in that object which may contain nested objects', () => {
        expect(nestedEvenSum(obj1)).toBe(6);
        expect(nestedEvenSum(obj2)).toBe(10);
    });
});
