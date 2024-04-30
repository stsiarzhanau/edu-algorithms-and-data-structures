import { BinarySearchTreeNode } from './binarySearchTreeNode';

export class BinarySearchTree {
    root: BinarySearchTreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const node = new BinarySearchTreeNode(value);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current: BinarySearchTreeNode = this.root;

        // eslint-disable-next-line
        while (true) {
            if (value === current.value) {
                return false; // handle duplicates
            }

            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                }

                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    break;
                }

                current = current.right;
            }
        }

        return this;
    }

    // should behave like `Array.prototype.includes`
    find(value: number) {
        if (!this.root) {
            return false;
        }

        let current: BinarySearchTreeNode | null = this.root;

        while (current) {
            if (current.value === value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }

        return false;
    }
}
