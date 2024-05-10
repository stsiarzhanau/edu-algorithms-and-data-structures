import { it, expect, describe } from 'vitest';
import { PriorityQueue } from './priorityQueue';

describe('PriorityQueue', () => {
    const pq = new PriorityQueue();

    it('should instantiate an object with a single `nodes` property that is an empty array', () => {
        expect(Object.keys(pq)).toEqual(['nodes']);
        expect(pq.nodes).toEqual([]);
    });

    describe('enqueue', () => {
        it('should enqueue nodes in a correct place (random insertion order)', () => {
            const pq = new PriorityQueue();
            pq.enqueue('a', 64);
            expect(pq.nodes).toMatchObject([{ value: 'a', priority: 64 }]);
            pq.enqueue('b', 16);
            expect(pq.nodes).toMatchObject([
                { value: 'b', priority: 16 },
                { value: 'a', priority: 64 },
            ]);
            pq.enqueue('c', 41);
            expect(pq.nodes).toMatchObject([
                { value: 'b', priority: 16 },
                { value: 'a', priority: 64 },
                { value: 'c', priority: 41 },
            ]);
            pq.enqueue('d', 11);
            expect(pq.nodes).toMatchObject([
                { value: 'd', priority: 11 },
                { value: 'b', priority: 16 },
                { value: 'c', priority: 41 },
                { value: 'a', priority: 64 },
            ]);
            pq.enqueue('e', 21);
            expect(pq.nodes).toMatchObject([
                { value: 'd', priority: 11 },
                { value: 'b', priority: 16 },
                { value: 'c', priority: 41 },
                { value: 'a', priority: 64 },
                { value: 'e', priority: 21 },
            ]);
            pq.enqueue('f', 9);
            expect(pq.nodes).toMatchObject([
                { value: 'f', priority: 9 },
                { value: 'b', priority: 16 },
                { value: 'd', priority: 11 },
                { value: 'a', priority: 64 },
                { value: 'e', priority: 21 },
                { value: 'c', priority: 41 },
            ]);
        });

        it('should enqueue nodes in a correct place (nodes are inserted in priority order)', () => {
            const pq = new PriorityQueue();
            pq.enqueue('a', 9);
            expect(pq.nodes).toMatchObject([{ value: 'a', priority: 9 }]);
            pq.enqueue('b', 16);
            expect(pq.nodes).toMatchObject([
                { value: 'a', priority: 9 },
                { value: 'b', priority: 16 },
            ]);
            pq.enqueue('c', 41);
            expect(pq.nodes).toMatchObject([
                { value: 'a', priority: 9 },
                { value: 'b', priority: 16 },
                { value: 'c', priority: 41 },
            ]);
        });

        it('should return new `nodes` length', () => {
            const pq = new PriorityQueue();
            expect(pq.nodes.length).toBe(0);
            pq.enqueue('a', 9);
            pq.enqueue('b', 16);
            pq.enqueue('c', 41);
            expect(pq.nodes.length).toBe(3);
        });
    });

    describe('dequeue', () => {
        it('should correctly operate on an empty priority queue', () => {
            const pq = new PriorityQueue();
            expect(pq.nodes).toEqual([]);
            expect(pq.dequeue()).toBeUndefined();
            expect(pq.nodes).toEqual([]);
        });

        it('should correctly operate on a priority queue with a single value stored', () => {
            const pq = new PriorityQueue();
            pq.enqueue('a', 9);
            expect(pq.nodes).toMatchObject([{ value: 'a', priority: 9 }]);
            expect(pq.dequeue()).toMatchObject({ value: 'a', priority: 9 });
            expect(pq.nodes).toEqual([]);
        });

        it('should correctly operate on a random size priority queue', () => {
            const pq = new PriorityQueue();
            pq.enqueue('a', 64);
            pq.enqueue('b', 16);
            pq.enqueue('c', 41);
            pq.enqueue('d', 11);
            pq.enqueue('e', 21);
            pq.enqueue('f', 9);
            expect(pq.nodes).toMatchObject([
                { value: 'f', priority: 9 },
                { value: 'b', priority: 16 },
                { value: 'd', priority: 11 },
                { value: 'a', priority: 64 },
                { value: 'e', priority: 21 },
                { value: 'c', priority: 41 },
            ]);
            expect(pq.dequeue()).toMatchObject({ value: 'f', priority: 9 });
            expect(pq.nodes).toMatchObject([
                { value: 'd', priority: 11 },
                { value: 'b', priority: 16 },
                { value: 'c', priority: 41 },
                { value: 'a', priority: 64 },
                { value: 'e', priority: 21 },
            ]);
        });

        it('should correctly operate on a random size priority queue that might contain elements with the same priority', () => {
            const pq = new PriorityQueue();
            pq.enqueue('a', 64);
            pq.enqueue('b', 16);
            pq.enqueue('c', 41);
            pq.enqueue('d', 11);
            pq.enqueue('e', 21);
            pq.enqueue('f', 11);
            pq.enqueue('g', 11);
            pq.enqueue('h', 11);
            expect(pq.nodes).toEqual([
                expect.objectContaining({ value: 'd', priority: 11 }),
                expect.objectContaining({ value: 'h', priority: 11 }),
                expect.objectContaining({ value: 'f', priority: 11 }),
                expect.objectContaining({ value: 'b', priority: 16 }),
                expect.objectContaining({ value: 'e', priority: 21 }),
                expect.objectContaining({ value: 'c', priority: 41 }),
                expect.objectContaining({ value: 'g', priority: 11 }),
                expect.objectContaining({ value: 'a', priority: 64 }),
            ]);
            expect(pq.dequeue()).toMatchObject({
                value: 'd',
                priority: 11,
            });
            expect(pq.nodes).toEqual([
                expect.objectContaining({ value: 'f', priority: 11 }),
                expect.objectContaining({ value: 'h', priority: 11 }),
                expect.objectContaining({ value: 'g', priority: 11 }),
                expect.objectContaining({ value: 'b', priority: 16 }),
                expect.objectContaining({ value: 'e', priority: 21 }),
                expect.objectContaining({ value: 'c', priority: 41 }),
                expect.objectContaining({ value: 'a', priority: 64 }),
            ]);
            expect(pq.dequeue()).toMatchObject({
                value: 'f',
                priority: 11,
            });
            expect(pq.dequeue()).toMatchObject({
                value: 'g',
                priority: 11,
            });
            expect(pq.dequeue()).toMatchObject({
                value: 'h',
                priority: 11,
            });
            expect(pq.nodes).toEqual([
                expect.objectContaining({ value: 'b', priority: 16 }),
                expect.objectContaining({ value: 'e', priority: 21 }),
                expect.objectContaining({ value: 'c', priority: 41 }),
                expect.objectContaining({ value: 'a', priority: 64 }),
            ]);
        });
    });
});
