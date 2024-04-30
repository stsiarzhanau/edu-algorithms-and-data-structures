// in mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2
// should return Fibonacci number at a given index
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, ...

export function fibonacciIterative(n: number): number {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        const temp = a;
        a = b;
        b = temp + b;
    }

    return a;
}

export function fibonacciIterative2(n: number) {
    if (n < 2) return n;

    const fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        const res = fibo[i - 1] + fibo[i - 2];
        fibo.push(res);
    }

    return fibo[fibo.length - 1];
}

export function fibonacciRecursive(n: number): number {
    if (n <= 1) return n; // Base case: if n <= 1 return n

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // Recursive case: return fibonacci(n-1) + fibonacci(n-2)
}

export function fibonacciRecursiveWithMemo(n: number): number {
    const memo = new Map<number, number>();

    function fib(n: number): number {
        if (memo.has(n)) {
            return memo.get(n)!;
        }

        if (n <= 1) {
            return n;
        }

        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
    }

    const res = fib(n);

    return res;
}
