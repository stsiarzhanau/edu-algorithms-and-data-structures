import { describe, expect, it } from 'vitest';

import {
    factorialIterative1,
    factorialIterative2,
    factorialRecursive,
} from './factorial';

describe('factorialIterative1', () => {
    it('should return a correct factorial', () => {
        expect(factorialIterative1(1)).toBe(1);
        expect(factorialIterative1(3)).toBe(6);
        expect(factorialIterative1(4)).toBe(24);
    });
});

describe('factorialIterative2', () => {
    it('should return a correct factorial', () => {
        expect(factorialIterative2(1)).toBe(1);
        expect(factorialIterative2(3)).toBe(6);
        expect(factorialIterative2(4)).toBe(24);
    });
});

describe('factorialRecursive', () => {
    it('should return a correct factorial', () => {
        expect(factorialRecursive(1)).toBe(1);
        expect(factorialRecursive(3)).toBe(6);
        expect(factorialRecursive(4)).toBe(24);
    });
});
