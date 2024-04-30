import { it, expect, describe, beforeEach } from 'vitest';
import { Stack } from './stack';
import { StackNode } from './stackNode';

describe('Stack', () => {
    describe('push', () => {
        it('should append a new node with a given value to the beginning of the stack', () => {
            const stack = new Stack();

            expect(stack.first).toBeNull();
            expect(stack.last).toBeNull();
            expect(stack.size).toBe(0);

            stack.push(1);

            expect(stack.first).toEqual({ value: 1, next: null });
            expect(stack.last).toEqual({ value: 1, next: null });
            expect(stack.size).toBe(1);

            stack.push(2);

            expect(stack.first).toEqual({
                value: 2,
                next: expect.objectContaining({ value: 1 }) as StackNode,
            });
            expect(stack.last).toEqual({ value: 1, next: null });
        });

        it('should return the new size of the stack', () => {
            const stack = new Stack();
            expect(stack.push(1)).toBe(1);
        });
    });

    describe('toArray', () => {
        it('should collect node values and return them as an array', () => {
            const stack1 = new Stack();
            stack1.push(1);
            stack1.push(2);
            stack1.push(3);
            expect(stack1.toArray()).toEqual([3, 2, 1]);

            const stack2 = new Stack();
            stack2.push(1);
            expect(stack2.toArray()).toEqual([1]);
        });

        it('should return an empty array when called on an empty stack', () => {
            const stack = new Stack();
            expect(stack.toArray()).toEqual([]);
        });
    });

    describe('pop', () => {
        let stack: Stack;

        beforeEach(() => {
            stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
        });

        it('should delete the first node from the stack', () => {
            expect(stack.toArray()).toEqual([3, 2, 1]);
            stack.pop();
            expect(stack.last?.next).toBeNull();
            expect(stack.toArray()).toEqual([2, 1]);
            expect(stack.size).toBe(2);
        });

        it('should return the deleted node', () => {
            expect(stack.pop()).toEqual({ value: 3, next: null }); // next is intentionally set to `null` for a removed node to clean things up
        });

        it('should return `undefined` when called on an empty stack', () => {
            stack.pop();
            stack.pop();
            stack.pop();
            expect(stack.pop()).toBeUndefined();
            expect(stack.pop()).toBeUndefined();
            expect(stack.first).toBeNull();
            expect(stack.last).toBeNull();
            expect(stack.size).toBe(0);
        });
    });
});
