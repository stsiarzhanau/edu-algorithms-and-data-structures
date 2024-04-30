import { it, expect, describe, beforeEach } from 'vitest';
import { Queue } from './queue';
import { QueueNode } from './queueNode';

describe('Queue', () => {
    describe('enqueue', () => {
        it('should append a new node with a given value to the end of the queue', () => {
            const queue = new Queue();

            expect(queue.first).toBeNull();
            expect(queue.last).toBeNull();
            expect(queue.size).toBe(0);

            queue.enqueue(1);

            expect(queue.first).toEqual({ value: 1, next: null });
            expect(queue.last).toEqual({ value: 1, next: null });
            expect(queue.size).toBe(1);

            queue.enqueue(2);

            expect(queue.first).toEqual({
                value: 1,
                next: expect.objectContaining({ value: 2 }) as QueueNode,
            });
            expect(queue.last).toEqual({ value: 2, next: null });
        });

        it('should return the new size of the queue', () => {
            const queue = new Queue();
            expect(queue.enqueue(1)).toBe(1);
        });
    });

    describe('toArray', () => {
        it('should collect node values and return them as an array', () => {
            const queue1 = new Queue();
            queue1.enqueue(1);
            queue1.enqueue(2);
            queue1.enqueue(3);
            expect(queue1.toArray()).toEqual([1, 2, 3]);

            const queue2 = new Queue();
            queue2.enqueue(1);
            expect(queue2.toArray()).toEqual([1]);
        });

        it('should return an empty array when called on an empty queue', () => {
            const queue = new Queue();
            expect(queue.toArray()).toEqual([]);
        });
    });

    describe('dequeue', () => {
        let queue: Queue;

        beforeEach(() => {
            queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
        });

        it('should delete the first node from the queue', () => {
            expect(queue.toArray()).toEqual([1, 2, 3]);
            queue.dequeue();
            expect(queue.last?.next).toBeNull();
            expect(queue.toArray()).toEqual([2, 3]);
            expect(queue.size).toBe(2);
        });

        it('should return the deleted node', () => {
            expect(queue.dequeue()).toEqual({ value: 1, next: null }); // next is intentionally set to `null` for a removed node to clean things up
        });

        it('should return `undefined` when called on an empty queue', () => {
            queue.dequeue();
            queue.dequeue();
            queue.dequeue();
            expect(queue.dequeue()).toBeUndefined();
            expect(queue.dequeue()).toBeUndefined();
            expect(queue.first).toBeNull();
            expect(queue.last).toBeNull();
            expect(queue.size).toBe(0);
        });
    });
});
