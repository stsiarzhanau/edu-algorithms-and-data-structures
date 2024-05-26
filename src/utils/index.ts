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
