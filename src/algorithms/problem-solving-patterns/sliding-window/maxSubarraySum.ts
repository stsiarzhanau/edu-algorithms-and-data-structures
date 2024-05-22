/* Time complexity - O(N^2) */
export function maxSubarraySumNaive(arr: number[], count: number) {
    if (count > arr.length) {
        return null;
    }

    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - count; i++) {
        let temp = 0;

        for (let j = 0; j < count; j++) {
            temp += arr[i + j];
        }

        if (temp > maxSum) {
            maxSum = temp;
        }
    }

    return maxSum;
}

/* Time complexity - O(N) */
export function maxSubarraySum(arr: number[], count: number) {
    if (count > arr.length) {
        return null;
    }

    let maxSum = 0;
    let temp = 0;

    for (let i = 0; i < count; i++) {
        maxSum += arr[i];
    }

    temp = maxSum;

    for (let i = count; i < arr.length; i++) {
        temp = temp - arr[i - count] + arr[i];
        maxSum = Math.max(maxSum, temp);
    }

    return maxSum;
}
