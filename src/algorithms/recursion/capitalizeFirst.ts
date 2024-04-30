// Write a recursive function called `capitalizeFirst`. Given an array of strings,
// capitalize the first letter of each string in the array.

const capitalizeWord = (word: string) =>
    word.charAt(0).toUpperCase().concat(word.slice(1));

export function capitalizeFirst(arr: string[]): string[] {
    if (arr.length === 1) return [capitalizeWord(arr[0])];
    return [capitalizeWord(arr[0]), ...capitalizeFirst(arr.slice(1))];
}
