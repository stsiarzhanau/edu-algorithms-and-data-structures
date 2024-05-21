export function countUniqueValues(arr: number[]) {
    let prev = 0;
    let next = 1;
    let count = 0;

    while (prev < arr.length) {
        if (arr[prev] !== arr[next]) {
            count++;
        }
        prev++;
        next++;
    }

    return count;
}
