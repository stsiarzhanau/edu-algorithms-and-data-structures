// Write a recursive function called `flatten` which accepts an array of arrays
// and returns a new array with all values flattened.

export function flatten<T>(arr: (T | T[])[]): T[] {
    let newArr = [] as T[];

    for (const el of arr) {
        if (Array.isArray(el)) {
            newArr = [...newArr, ...flatten(el)];
        } else {
            newArr = [...newArr, el];
        }
    }

    return newArr;
}
