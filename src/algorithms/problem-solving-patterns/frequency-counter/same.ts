/* Time complexity - O(N^2) */
export function sameNaive(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const res = [...arr2];

    for (const num of arr1) {
        for (let i = 0; i < arr2.length; i++) {
            if (res[i] === num ** 2) {
                res.splice(i, 1);
            }
        }
    }

    return res.length === 0 ? true : false;
}

/* Time complexity - O(N) */
export function same(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyCounter1: Record<string, number> = {};
    const frequencyCounter2: Record<string, number> = {};

    for (const num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] ?? 0) + 1;
    }

    for (const num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] ?? 0) + 1;
    }

    let squaredKey: string;

    for (const key in frequencyCounter1) {
        squaredKey = String(Number(key) ** 2);

        if (frequencyCounter1[key] !== frequencyCounter2[squaredKey]) {
            return false;
        }
    }

    return true;
}
