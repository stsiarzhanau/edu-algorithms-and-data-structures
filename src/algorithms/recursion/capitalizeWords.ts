// Write a recursive function called `capitalizeWords`. Given an array of words,
// return a new array containing each word capitalized.

export function capitalizeWords(words: string[]): string[] {
    if (words.length === 1) return [words[0].toUpperCase()];
    return [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))];
}

/**
 * capitalizeWords(['recursion']) -> [RECURSION]
 * capitalizeWords(['learning', 'recursion']) -> [LEARNING, RECURSION]
 * capitalizeWords(['am', 'learning', 'recursion']) -> [AM, LEARNING, RECURSION]
 * capitalizeWords(['i', 'am', 'learning', 'recursion']) -> [I, AM, LEARNING, RECURSION]
 */
