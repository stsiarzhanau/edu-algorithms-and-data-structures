import { it, expect, describe } from 'vitest';

import {
    fibonacciIterative,
    fibonacciIterative2,
    fibonacciRecursive,
    fibonacciRecursiveWithMemo,
} from './fibonacci';

describe('fibonacciIterative', () => {
    it('should return a correct sum of N numbers in a fibonacci sequence', () => {
        expect(fibonacciIterative(0)).toBe(0);
        expect(fibonacciIterative(1)).toBe(1);
        expect(fibonacciIterative(2)).toBe(1);
        expect(fibonacciIterative(3)).toBe(2);
        expect(fibonacciIterative(9)).toBe(34);
    });
});

describe('fibonacciIterative2', () => {
    it('should return a correct sum of N numbers in a fibonacci sequence', () => {
        expect(fibonacciIterative2(0)).toBe(0);
        expect(fibonacciIterative2(1)).toBe(1);
        expect(fibonacciIterative2(2)).toBe(1);
        expect(fibonacciIterative2(3)).toBe(2);
        expect(fibonacciIterative2(9)).toBe(34);
    });
});

describe('fibonacciRecursive', () => {
    it('should return a correct sum of N numbers in a fibonacci sequence', () => {
        expect(fibonacciRecursive(0)).toBe(0);
        expect(fibonacciRecursive(1)).toBe(1);
        expect(fibonacciRecursive(2)).toBe(1);
        expect(fibonacciRecursive(3)).toBe(2);
        expect(fibonacciRecursive(9)).toBe(34);
    });
});

describe('fibonacciRecursiveWithMemo', () => {
    it('should return a correct sum of N numbers in a fibonacci sequence', () => {
        expect(fibonacciRecursiveWithMemo(0)).toBe(0);
        expect(fibonacciRecursiveWithMemo(1)).toBe(1);
        expect(fibonacciRecursiveWithMemo(2)).toBe(1);
        expect(fibonacciRecursiveWithMemo(3)).toBe(2);
        expect(fibonacciRecursiveWithMemo(9)).toBe(34);
    });
});
