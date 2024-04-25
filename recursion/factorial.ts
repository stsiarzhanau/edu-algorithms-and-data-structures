export function factorialIterative1(n: number) {
    let result = 1;

    for (let i = n; i > 0; i--) {
        result *= i;
    }

    return result;
}

export function factorialIterative2(n: number) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

export function factorialRecursive(n: number): number {
    if (n === 0) {
        return 1; // Base case: if n is 0, return 1
    }

    return n * factorialRecursive(n - 1); // Recursive case: return n multiplied by factorial of n-1
}
