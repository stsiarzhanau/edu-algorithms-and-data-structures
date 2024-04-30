// Count the number of times a substring appears in a longer string.

export function naiveStringSearch(str: string, substr: string) {
    let count = 0;

    // Loop over the string comparing each character of the string with the first character of the substring.
    for (let i = 0; i < str.length; i++) {
        // Loop over the substring comparing each character of the substring with the corresponding character of the string.
        for (let j = 0; j < substr.length; j++) {
            // If some of the characters in a pair don't match, break out of the inner loop.
            if (str[i + j] !== substr[j]) {
                break;
            } else if (j === substr.length - 1) {
                // If you complete the inner loop and find a match, increment the count of matches.
                count++;
            }
        }
    }

    return count;
}
