export function areThereDuplicates<T>(...args: T[]) {
    if (!args || args.length < 2) {
        return false;
    }

    const unique = new Set<T>();

    for (const arg of args) {
        if (unique.has(arg)) {
            return true;
        }

        unique.add(arg);
    }

    return false;
}

/* one-liner solution */
// export function areThereDuplicates(...args: unknown[]) {
//     return new Set(args).size !== args.length;
// }
