export class BinarySearchTreeNode {
    value: number;
    left: BinarySearchTreeNode | null;
    right: BinarySearchTreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
