// Write a recursive function called `nestedEvenSum`. Return the sum of all even
// numbers in an object which may contain nested objects.

// Quite hard.

const isObject = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === 'object' && !Array.isArray(val);
};

const isEvenNumber = (val: unknown): val is number => {
    return typeof val === 'number' && val % 2 === 0;
};

export function nestedEvenSum(obj: Record<string, unknown>) {
    let sum = 0;

    for (const key in obj) {
        const val = obj[key];

        if (isObject(val)) {
            sum += nestedEvenSum(val);
        } else if (isEvenNumber(val)) {
            sum += val;
        }
    }

    return sum;
}
