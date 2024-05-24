/* Time complexity - O(N), space complexity - O(1) */

export function averagePair(arr: number[], average: number) {
    if (arr.length < 2 || arr[0] > average) {
        return false;
    }

    let min = 0;
    let max = arr.length - 1;
    let result: number;

    while (min < max) {
        result = (arr[min] + arr[max]) / 2;

        if (result === average) {
            return true;
        }

        if (result > average) {
            max--;
        } else {
            min++;
        }
    }

    return false;
}
