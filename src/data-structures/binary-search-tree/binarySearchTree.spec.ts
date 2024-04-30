import { it, expect, describe, beforeEach } from 'vitest';
import { BinarySearchTree } from './binarySearchTree';
// import { BinarySearchTreeNode } from './binarySearchTreeNode';

describe('BST', () => {
    const bst = new BinarySearchTree();
    expect(bst.root).toBeNull();

    describe('insert', () => {
        it('should insert a new node with a specified value in a proper position in a tree', () => {
            /**
             *  Expected BST stucture:
             *                   41
             *          20                  65
             *  11                      50          91
             */

            const bst = new BinarySearchTree();
            bst.insert(41);
            expect(bst.root).toEqual({ value: 41, left: null, right: null });
            bst.insert(65);
            expect(bst.root).toEqual({
                value: 41,
                left: null,
                right: { value: 65, left: null, right: null },
            });
            bst.insert(20);
            expect(bst.root).toEqual({
                value: 41,
                left: { value: 20, left: null, right: null },
                right: { value: 65, left: null, right: null },
            });
            bst.insert(91);
            expect(bst.root).toEqual({
                value: 41,
                left: { value: 20, left: null, right: null },
                right: {
                    value: 65,
                    left: null,
                    right: { value: 91, left: null, right: null },
                },
            });
            bst.insert(50);
            expect(bst.root).toEqual({
                value: 41,
                left: { value: 20, left: null, right: null },
                right: {
                    value: 65,
                    left: { value: 50, left: null, right: null },
                    right: { value: 91, left: null, right: null },
                },
            });
            bst.insert(11);
            expect(bst.root).toEqual({
                value: 41,
                left: {
                    value: 20,
                    left: { value: 11, left: null, right: null },
                    right: null,
                },
                right: {
                    value: 65,
                    left: { value: 50, left: null, right: null },
                    right: { value: 91, left: null, right: null },
                },
            });
        });

        it('should return the tree instance when inserting a node with a value that is not present in a BST', () => {
            const bst = new BinarySearchTree();
            expect(bst.insert(41)).toEqual(bst);
        });

        it('should return `false` when inserting a node with a value that has already present in a BST', () => {
            const bst = new BinarySearchTree();
            expect(bst.insert(41)).toEqual(bst);
            expect(bst.insert(41)).toEqual(false);
        });
    });

    // shoul behave like `Array.prototype.includes`
    describe('find', () => {
        let bst: BinarySearchTree;

        beforeEach(() => {
            bst = new BinarySearchTree();
            bst.insert(41);
            bst.insert(65);
            bst.insert(20);
            bst.insert(91);
            bst.insert(50);
            bst.insert(11);
        });

        it('should return `true` if the node with a given value is present in the tree', () => {
            expect(bst.find(41)).toBe(true);
            expect(bst.find(20)).toBe(true);
        });

        it('should return `false` if the node with a given value is not present in the tree', () => {
            expect(bst.find(100)).toBe(false);
        });
    });
});
