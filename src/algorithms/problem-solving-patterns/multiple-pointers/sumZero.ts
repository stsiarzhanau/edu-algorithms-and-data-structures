/* 2 pointers from the left and right - go to middle */

/* Time complexity - O(N^2), space complexity - O(1) */
export function sumZeroNaive(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]] as [number, number];
            }
        }
    }

    return undefined;
}

/* Time complexity - O(N), space complexity - O(1) */
export function sumZero(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;
    let sum: number;

    while (left < right) {
        sum = arr[right] + arr[left];

        if (sum === 0) {
            return [arr[left], arr[right]] as [number, number];
        }

        if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return undefined;
}
