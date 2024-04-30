export function linearSearch(arr: unknown[], val: unknown) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }

    return -1;
}
