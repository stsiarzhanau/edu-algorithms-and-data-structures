/* Time complexity - O(N), spaceComplexity - O(1) */
export function isSubsequence(str1: string, str2: string) {
    let i = 0;
    let j = 0;

    if (!str1) {
        return true;
    }

    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;

        if (i === str1.length) {
            return true;
        }

        j++;
    }

    return false;
}

/**
 * Recursive solution (not mine)...
 *
 * Base cases:
 *      1. No characters in the 1st string are left -> we've found the whole sequence
 *      2. No characters in the 2nd string are left -> we reached the 2nd string end, but we haven't
 *         found the whole sequence
 * Recursive steps:
 *      1. "Shift" the 2nd string until the first letter of the 1st string is found
 *         and make a recursive call
 *      2. If it's found "shift" both strings and make a recursive call
 *
 * 'sing', 'sting'
 * 'ing',  'ting'
 * 'ing',  'ing'
 * 'ng',   'ng'
 * 'g',    'g'
 * '' -> true
 *
 * 'sing', 'stink'
 * 'ing',  'tink'
 * 'ing',  'ink'
 * 'ng',   'nk'
 * 'g',    'k'
 * 'g',    '' -> false
 *
 * Time complexity for the worst case (no match) ia approximately O(N^2) where N is the length of
 * the longest string (`slice` method is called in each of N recursive calls and `slice` method
 * itself also takes O(N) time.
 *
 * Space complexity - O(N)
 */
export function isSubsequenceRecursive(str1: string, str2: string) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;

    if (str2.startsWith(str1[0])) {
        return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
    }

    return isSubsequenceRecursive(str1, str2.slice(1));
}
