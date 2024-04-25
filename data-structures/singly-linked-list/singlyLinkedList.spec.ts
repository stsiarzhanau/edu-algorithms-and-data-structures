import { it, expect, describe, beforeEach } from 'vitest';
import { SinglyLinkedList } from './singlyLinkedList';
import { SinglyLinkedListNode } from './singlyLinkedListNode';

describe('SinglyLinkedList', () => {
    describe('push', () => {
        it('should append a new node with a given value to the end of the list', () => {
            const list = new SinglyLinkedList();

            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);

            list.push(1);

            expect(list.head?.value).toBe(1);
            expect(list.tail?.value).toBe(1);
            expect(list.tail?.next).toBeNull();
            expect(list.length).toBe(1);

            list.push(2);

            expect(list.head?.value).toBe(1);
            expect(list.tail?.value).toBe(2);
            expect(list.tail?.next).toBeNull();
            expect(list.length).toBe(2);
        });

        it('should return a reference to the list', () => {
            const list = new SinglyLinkedList();
            expect(list.push(1)).toEqual(list);
        });
    });

    describe('toArray', () => {
        it('should collect node values and return them as an array', () => {
            const list1 = new SinglyLinkedList();
            list1.push(1);
            list1.push(2);
            list1.push(3);
            expect(list1.toArray()).toEqual([1, 2, 3]);

            const list2 = new SinglyLinkedList();
            list2.push(1);
            expect(list2.toArray()).toEqual([1]);
        });

        it('should return an empty array when called on an empty list', () => {
            const list = new SinglyLinkedList();
            expect(list.toArray()).toEqual([]);
        });
    });

    describe('pop', () => {
        let list: SinglyLinkedList;

        beforeEach(() => {
            list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
        });

        it('should delete the last node from the list and return the deleted node', () => {
            list.pop();
            expect(list.toArray()).toEqual([1, 2]);
        });

        it('should return the deleted node', () => {
            expect(list.pop()).toEqual({ value: 3, next: null });
        });

        it('should return `undefined` when called on an empty list', () => {
            list.pop();
            list.pop();
            list.pop();
            expect(list.pop()).toBeUndefined();
            expect(list.pop()).toBeUndefined();
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });
    });

    describe('shift', () => {
        let list: SinglyLinkedList;

        beforeEach(() => {
            list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
        });

        it('should delete the first node from the list', () => {
            list.shift();
            expect(list.toArray()).toEqual([2, 3]);
        });

        it('should return the deleted node', () => {
            expect(list.shift()?.value).toBe(1);
            expect(list.shift()?.value).toBe(2);
            // expect(list.head).toEqual({ value: 3, next: null });
            // expect(list.tail).toEqual({ value: 3, next: null });
            expect(list.shift()?.value).toBe(3);
        });

        it('should return `undefined` when called on an empty list', () => {
            list.shift();
            list.shift();
            list.shift();
            expect(list.shift()).toBeUndefined();
            expect(list.shift()).toBeUndefined();
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });
    });

    describe('unshift', () => {
        const list = new SinglyLinkedList();

        it('should append a new node with a given value to the beginning of the list', () => {
            list.unshift(1);
            expect(list.toArray()).toEqual([1]);
            list.unshift(2);
            expect(list.toArray()).toEqual([2, 1]);
        });

        it('should return a reference to the list', () => {
            expect(list.unshift(3)).toEqual(list);
        });
    });

    describe('getByIndex', () => {
        const list = new SinglyLinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        it('should return a node at a specified index', () => {
            expect(list.getByIndex(0)?.value).toBe(1);
            expect(list.getByIndex(1)?.value).toBe(2);
            expect(list.getByIndex(2)?.value).toBe(3);
        });

        it('should return `undefined` when a negative index is specified', () => {
            expect(list.getByIndex(-1)?.value).toBeUndefined();
        });

        it('should return `undefined` when an index greater than the index of the last element is specified', () => {
            expect(list.getByIndex(3)?.value).toBeUndefined();
        });
    });

    describe('set', () => {
        let list: SinglyLinkedList;

        beforeEach(() => {
            list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
        });

        it('should update node value at a specified index (if node exists at a specified index)', () => {
            list.set(1, 4);
            expect(list.toArray()).toEqual([1, 4, 3]);
        });

        it('should return `true` if node exists at a specified index', () => {
            expect(list.set(1, 4)).toBe(true);
        });

        it("should return `false` if there's no node at a specified index", () => {
            expect(list.set(-1, 5)).toBe(false);
            expect(list.set(3, 6)).toBe(false);
            expect(list.toArray()).toEqual([1, 2, 3]);
        });
    });

    describe('insert', () => {
        let list: SinglyLinkedList;

        beforeEach(() => {
            list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
        });

        it('should add (unshift) a node at the beginning of the list when zero index is specified', () => {
            list.insert(0, 4);
            expect(list.toArray()).toEqual([4, 1, 2, 3]);
        });

        it('should add (push) a node at the end of the list when the index next to the index of the last node is specified', () => {
            list.insert(3, 4);
            expect(list.toArray()).toEqual([1, 2, 3, 4]);
        });

        it('should insert a node before a node with a given index wnen an index between zero and the index of the last element (incl.) is specified', () => {
            list.insert(1, 4);
            expect(list.toArray()).toEqual([1, 4, 2, 3]);
        });

        it('should return `true` if correct index is specified', () => {
            expect(list.insert(0, 4)).toBe(true);
            expect(list.insert(4, 5)).toBe(true);
        });

        it('should return `false` if incorrect index (less than zero or greater than the list length) is specified', () => {
            expect(list.insert(-1, 4)).toBe(false);
            expect(list.insert(4, 5)).toBe(false);
            expect(list.toArray()).toEqual([1, 2, 3]);
        });
    });

    describe('remove', () => {
        let list: SinglyLinkedList;

        beforeEach(() => {
            list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
        });

        it('should remove (shift) a node from the beginning of the list when zero index is specified', () => {
            list.remove(0);
            expect(list.toArray()).toEqual([2, 3]);
        });

        it('should remove (pop) a node from the end of the list when the index of the last node is specified', () => {
            list.remove(2);
            expect(list.toArray()).toEqual([1, 2]);
        });

        it('should remove node at a given index wnen an index between zero and the index of the last element is specified', () => {
            list.remove(1);
            expect(list.toArray()).toEqual([1, 3]);
        });

        it('should return a removed node if correct index is specified', () => {
            expect((list.remove(0) as SinglyLinkedListNode)?.value).toBe(1);
            expect((list.remove(1) as SinglyLinkedListNode)?.value).toBe(3);
        });

        it('should return `false` if incorrect index (less than zero or greater than the index of the last node) is specified', () => {
            expect(list.remove(-1)).toBe(false);
            expect(list.remove(3)).toBe(false);
            expect(list.toArray()).toEqual([1, 2, 3]);
        });
    });

    describe('reverse', () => {
        it('should reverse a list', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.reverse().toArray()).toEqual([3, 2, 1]);
        });

        it('should reverse a list 2', () => {
            const list = new SinglyLinkedList();

            expect(list.reverse().toArray()).toEqual([]);
        });
    });
});
