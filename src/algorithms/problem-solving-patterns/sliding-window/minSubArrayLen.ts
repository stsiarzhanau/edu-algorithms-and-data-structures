/* Time complexity - O(N). Space Complexity - O(1) */
export function minSubArrayLen(arr: number[], sum: number) {
    let tempSum = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (tempSum < sum) {
            if (end >= arr.length) {
                break;
            }

            tempSum = tempSum + arr[end];
            /* Grow the window to the right */
            end++;
        } else {
            minLen = Math.min(minLen, end - start);
            tempSum = tempSum - arr[start];
            /* Shrink the window from the left */
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
