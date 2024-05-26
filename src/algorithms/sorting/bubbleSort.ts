import { swap } from '../../utils';

export function bubbleSortNaive(arr: number[]) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }

        // console.log('One pass complete!');
    }

    return arr;
}

export function bubbleSortOptimized(arr: number[]) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }

        // console.log('One pass complete!');
    }

    return arr;
}

/* Additional optimization */
export function bubbleSort(arr: number[]) {
    let noSwaps: boolean;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;

        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        /**
         * If we go through the inner loop with no swapping at all, it means that the array is
         * already sorted and we can stop Bubble Sort at that point.
         */
        if (noSwaps) {
            break;
        }

        // console.log('One pass complete!');
    }

    return arr;
}
