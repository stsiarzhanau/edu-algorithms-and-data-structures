export function productOfArray(arr: number[]) {
    return arr.reduce((acc, el) => {
        return acc * el;
    });
}

export function productOfArrayRecursive(arr: number[]): number {
    if (arr.length === 0) return 1;

    return arr[0] * productOfArrayRecursive(arr.slice(1));
}
