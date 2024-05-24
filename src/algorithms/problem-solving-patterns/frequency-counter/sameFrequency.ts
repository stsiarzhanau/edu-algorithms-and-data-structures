/* Time complexity - O(N) */
export function sameFrequency(num1: number, num2: number) {
    const str1 = String(num1);
    const str2 = String(num2);

    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter: Record<string, number> = {};

    for (const char of str1) {
        frequencyCounter[char] = frequencyCounter[char]
            ? ++frequencyCounter[char]
            : 1;
    }

    for (const char of str2) {
        if (!(char in frequencyCounter) || frequencyCounter[char] === 0) {
            return false;
        }

        frequencyCounter[char]--;
    }

    return true;
}
