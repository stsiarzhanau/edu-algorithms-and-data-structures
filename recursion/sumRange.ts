export function sumRange(num: number): number {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

/**
 * sumRange(1) -> 1
 * sumRange(2) -> 3
 * sumRange(3) -> 6
 */
