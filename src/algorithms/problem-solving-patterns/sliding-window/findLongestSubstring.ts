/* My solution - count of reiterations depends on input string, not equal to the length of the
 * string
 */
export function findLongestSubstring2(str: string) {
    const map = new Map<string, number>();
    let i = 0;
    let currentLongest = 0;

    while (i < str.length) {
        const char = str[i];

        if (map.has(char)) {
            i = map.get(char)! + 1;
            map.clear();
        } else {
            map.set(char, i);
            i++;
        }

        currentLongest = Math.max(currentLongest, map.size);
    }

    return currentLongest;
}

/* Suggested solution: Time complexity - O(N) */
export function findLongestSubstring(str: string) {
    let longest = 0;
    const seen: Record<string, number> = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        /* + 1 to include current in count */
        longest = Math.max(longest, i - start + 1);
        /* store the index of the next char so as to not double count */
        seen[char] = i + 1;
    }

    return longest;
}

/**
 * 1 2 3 4 5 6 7
 *             1 2 3 4
 *                 1 2  3  4  5  6  7  8
 *
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 * l o n g e s t s u b  s  t  r  i  n  g
 * 0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15
 */
