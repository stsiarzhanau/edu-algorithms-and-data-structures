// Write a recursive function called `some` which accepts an array and
// a callback.The function returns `true` if a single value in the array returns
// `true` when passed to the callback. Otherwise it returns `false`.

export function some<T>(arr: T[], callback: (val: T) => boolean): boolean {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return some(arr.slice(1), callback);
}
