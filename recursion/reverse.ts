// Write a recursive function called `reverse` which accepts a string and returns
// a new string in reverse.

export function reverse(str: string): string {
    if (str.length <= 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

/**
 * reverse('d') -> d
 * reverse('cd') -> d + c
 * reverse('bcd') -> dc + b
 * reverse('abcd') -> dcb + a
 */
