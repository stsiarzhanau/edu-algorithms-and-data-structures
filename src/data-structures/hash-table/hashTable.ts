export class HashTable {
    keyMap;
    static defaultSize = 53;

    constructor(size = HashTable.defaultSize) {
        this.keyMap = new Array<[string, unknown][] | undefined>(size);
    }

    /* very basic hash function taken as is from the https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass course */
    private hash(key: string) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key: string, value: unknown) {
        const index = this.hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        const entry = this.keyMap[index]?.find(([k]) => k === key);

        if (!entry) {
            // set a new key value pair
            this.keyMap[index]?.push([key, value]);
        } else {
            // override an existing key's value
            entry[1] = value;
        }
    }

    get(key: string) {
        const index = this.hash(key);
        const bucket = this.keyMap[index];

        if (bucket) {
            return bucket.find(([k]) => k === key)?.[1] ?? undefined;
        }
    }

    keys() {
        let res: string[] = [];

        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const [key] of bucket) {
                    res = [...res, key];
                }
            }
        }

        return res;
    }

    values() {
        let res: unknown[] = [];

        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const [, val] of bucket) {
                    res = [...res, val];
                }
            }
        }

        return res;
    }

    entries() {
        let res: [string, unknown][] = [];

        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const [key, val] of bucket) {
                    res = [...res, [key, val]];
                }
            }
        }

        return res;
    }

    get size() {
        return this.entries().length;
    }

    has(key: string) {
        let res = false;

        for (const bucket of this.keyMap) {
            if (bucket) {
                for (const [bucketKey] of bucket) {
                    if (bucketKey === key) {
                        res = true;
                    }
                }
            }
        }

        return res;
    }

    delete(key: string) {
        let isEntryFound = false;
        const index = this.hash(key);

        for (const entry of this.keyMap[index] ?? []) {
            if (entry?.[0] === key) {
                isEntryFound = true;
            }
        }

        if (isEntryFound) {
            const newBucket = this.keyMap[index]?.filter(([k]) => k !== key);
            this.keyMap[index] = newBucket;
        }

        return isEntryFound;
    }

    clear() {
        this.keyMap = new Array<[string, unknown][] | undefined>(
            this.keyMap.length,
        );
    }

    forEach(
        cb: (value: unknown, key: string, hashTable: HashTable) => void,
        thisArg?: unknown,
    ) {
        for (const [key, val] of this.entries()) {
            cb.call(thisArg, val, key, this);
        }
    }
}
