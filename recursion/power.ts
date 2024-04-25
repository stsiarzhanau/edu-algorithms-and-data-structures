// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

export function power(base: number, exponent: number): number {
    // multiply the base by itself N times, where N === exponent
    let total = base;

    for (let i = 2; i <= exponent; i++) {
        total *= base;
    }

    return total;
}

export function powerRecursive(base: number, exponent: number): number {
    // multiply the base by itself N times, where N === exponent
    if (exponent === 0) return 1;
    return base * powerRecursive(base, exponent - 1);
}
