import { it, expect, describe, beforeEach } from 'vitest';
import { BinarySearchTree } from './binarySearchTree';

describe('BST', () => {
    let bstWithNodes: BinarySearchTree;

    beforeEach(() => {
        /**
         *  Test BST stucture:
         *                            ________________ 41 ________________
         *                           |                                    |
         *                 _________ 20 __________            __________  65 ___________
         *                |                       |          |                          |
         *          ____ 11 ____                  22         50                         91
         *         |            |
         *      __ 4 __      __ 13
         *     |       |    |
         *     2       6    12
         */

        bstWithNodes = new BinarySearchTree();
        bstWithNodes.insert(41);
        bstWithNodes.insert(20);
        bstWithNodes.insert(65);
        bstWithNodes.insert(11);
        bstWithNodes.insert(22);
        bstWithNodes.insert(50);
        bstWithNodes.insert(91);
        bstWithNodes.insert(4);
        bstWithNodes.insert(13);
        bstWithNodes.insert(2);
        bstWithNodes.insert(6);
        bstWithNodes.insert(12);
    });

    const bst = new BinarySearchTree();
    expect(bst.root).toBeNull();

    describe('insert', () => {
        it('should insert a new node with a specified value in a proper position in a tree', () => {
            /**
             *  Expected BST stucture:
             *                            ________________ 41 ________________
             *                            |                                   |
             *                 _________ 20                       __________  65 ___________
             *                |                                   |                         |
             *                11                                 50                         91
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

    describe('includes', () => {
        it('should return `true` if the node with a given value is present in the tree', () => {
            expect(bstWithNodes.includes(41)).toBe(true);
            expect(bstWithNodes.includes(20)).toBe(true);
        });

        it('should return `false` if the node with a given value is not present in the tree', () => {
            expect(bstWithNodes.includes(100)).toBe(false);
        });
    });

    describe('BFS', () => {
        it("should return an empty array if there's no root node", () => {
            const bst = new BinarySearchTree();
            expect(bst.BFS()).toEqual([]);
        });

        it('should return an array containing all the tree nodes in correct order', () => {
            expect(bstWithNodes.BFS()).toEqual([
                41, 20, 65, 11, 22, 50, 91, 4, 13, 2, 6, 12,
            ]);
        });
    });

    describe('DFSPreOrder', () => {
        it("should return an empty array if there's no root node", () => {
            const bst = new BinarySearchTree();
            expect(bst.DFSPreOrder()).toEqual([]);
        });

        it('should return an array containing all the tree nodes in correct order', () => {
            expect(bstWithNodes.DFSPreOrder()).toEqual([
                41, 20, 11, 4, 2, 6, 13, 12, 22, 65, 50, 91,
            ]);
        });
    });

    describe('DFSPostOrder', () => {
        it("should return an empty array if there's no root node", () => {
            const bst = new BinarySearchTree();
            expect(bst.DFSPostOrder()).toEqual([]);
        });

        it('should return an array containing all the tree nodes in correct order', () => {
            expect(bstWithNodes.DFSPostOrder()).toEqual([
                2, 6, 4, 12, 13, 11, 22, 20, 50, 91, 65, 41,
            ]);
        });
    });

    describe('DFSInOrder', () => {
        it("should return an empty array if there's no root node", () => {
            const bst = new BinarySearchTree();
            expect(bst.DFSInOrder()).toEqual([]);
        });

        it('should return an array containing all the tree nodes in correct order', () => {
            expect(bstWithNodes.DFSInOrder()).toEqual([
                2, 4, 6, 11, 12, 13, 20, 22, 41, 50, 65, 91,
            ]);
        });
    });
});
