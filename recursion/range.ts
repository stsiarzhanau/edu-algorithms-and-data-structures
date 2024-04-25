// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

export function range(num: number) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

export function recursiveRange(num: number): number {
    if (num === 0) return num;

    return num + recursiveRange(num - 1);
}
