export function validAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter: Record<string, number> = {};

    for (const char of str1) {
        frequencyCounter[char.toLowerCase()] =
            (frequencyCounter[char.toLowerCase()] ?? 0) + 1;
    }

    for (const char of str2) {
        if (
            frequencyCounter[char] === undefined ||
            frequencyCounter[char] === 0
        ) {
            return false;
        } else {
            frequencyCounter[char]--;
        }
    }

    return true;
}
