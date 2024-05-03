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

    includes(value: number) {
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

    BFS() {
        if (!this.root) {
            return [];
        }

        const queue: BinarySearchTreeNode[] = [this.root];
        const data: number[] = [];
        let node: BinarySearchTreeNode | null;

        while (queue.length > 0) {
            node = queue.shift()!;
            data.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }

    DFSPreOrder() {
        if (!this.root) {
            return [];
        }

        const data: number[] = [];

        function traverse(node: BinarySearchTreeNode) {
            data.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return data;
    }

    DFSPostOrder() {
        if (!this.root) {
            return [];
        }

        const data: number[] = [];

        function traverse(node: BinarySearchTreeNode) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            data.push(node.value);
        }

        traverse(this.root);

        return data;
    }

    DFSInOrder() {
        if (!this.root) {
            return [];
        }

        const data: number[] = [];

        function traverse(node: BinarySearchTreeNode) {
            if (node.left) {
                traverse(node.left);
            }

            data.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return data;
    }
}
