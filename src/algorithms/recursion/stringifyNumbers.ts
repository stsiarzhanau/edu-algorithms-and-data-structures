// Write a function called `stringifyNumbers` which takes in an object and finds
// all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

// Quite hard. Tricky part - we should mutate a `newObj` variable rather than
// `obj` variable itself.

const isObject = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === 'object' && !Array.isArray(val);
};

const isNumber = (val: unknown): val is number => {
    return typeof val === 'number';
};

export function stringifyNumbers(obj: Record<string, unknown>) {
    const newObj = {} as Record<string, unknown>;

    for (const key in obj) {
        const val = obj[key];

        if (isObject(val)) {
            newObj[key] = stringifyNumbers(val);
        } else if (isNumber(val)) {
            newObj[key] = String(val);
        } else {
            newObj[key] = val;
        }
    }

    return newObj;
}
