import { pivot } from '../../utils';

export function quickSort(arr: number[], left = 0, right = arr.length - 1) {
    /* base case: stop if subarray has only 1 element (left and right are the same */
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        /* left */
        quickSort(arr, left, pivotIndex - 1);
        /* right */
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}
