export function removeItemWithSlice<T>(arr: T[], index: number) {
    if (index < 0 || index >= arr.length) {
        return arr;
    }

    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function swap<T>(arr: T[], idx1: number, idx2: number) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

export function merge(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    let rest: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result = [...result, arr1[i]];
            i++;
        } else {
            result = [...result, arr2[j]];
            j++;
        }
    }

    if (i < arr1.length) {
        rest = arr1.slice(i);
    } else if (j < arr2.length) {
        rest = arr2.slice(j);
    }

    result = [...result, ...rest];

    return result;
}

// 1 [5, 7, 2, 9, 4] 0
// 2 [5, 2, 7, 9, 4] 1
// 3 [5, 2, 7, 9, 4] 1
// 4 [5, 2, 4, 9, 7] 2
//   [4, 2, 5, 9, 7]
export function pivot(arr: number[], start = 0, end = arr.length - 1) {
    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

export function getDigit(num: number, i: number) {
    return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

export function digitCount(num: number) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(integers: number[]) {
    let maxDigits = 0;

    for (const integer of integers) {
        maxDigits = Math.max(maxDigits, digitCount(integer));
    }

    return maxDigits;
}
