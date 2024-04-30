// Write a function called `collectStrings` which accepts an object and returns
// an array of all the values in the object that have a type of `string`

const isObject = (val: unknown): val is Record<string, unknown> => {
    return val !== null && typeof val === 'object' && !Array.isArray(val);
};

const isString = (val: unknown): val is string => {
    return typeof val === 'string';
};

export function collectStrings(obj: Record<string, unknown>) {
    let strings: string[] = [];

    for (const key in obj) {
        const val = obj[key];

        if (isObject(val)) {
            strings = [...strings, ...collectStrings(val)];
        } else if (isString(val)) {
            strings = [...strings, val];
        }
    }

    return strings;
}
