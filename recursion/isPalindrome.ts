// Write a recursive function called `isPalindrome` which returns `true` if the
// string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns `false`.

export function isPalindrome(str: string): boolean {
    if (str.length <= 1) return true;
    if (str.endsWith(str[0])) return isPalindrome(str.slice(1, -1));
    return false;
}

/**
 * isPalindrome('o') -> true
 * isPalindrome('coc') -> true && true
 * isPalindrome('acoca') -> true && true
 * isPalindrome('tacocat') -> true && true
 */
