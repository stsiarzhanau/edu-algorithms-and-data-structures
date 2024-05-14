import { it, expect, describe, beforeEach, vi } from 'vitest';
import { HashTable } from './hashTable';

describe('HashTable', () => {
    let ht: HashTable;

    beforeEach(() => {
        ht = new HashTable(17);
        ht.set('black', '#000000');
        ht.set('white', '#FFFFFF');
        ht.set('cyan', '#00FFFF');
    });

    it('should instantiate an object with a single `keyMap` property that is an array of specified size', () => {
        ht = new HashTable(10);
        expect(Object.keys(ht)).toEqual(['keyMap']);
        expect(Array.isArray(ht.keyMap)).toBe(true);
        expect(ht.keyMap.length).toBe(10);
        expect(ht.keyMap.filter(Boolean).length).toBe(0);
    });

    describe('set', () => {
        beforeEach(() => {
            ht = new HashTable(17);
        });

        it('should take a key and a value and save them as a key-value pair (entry) in a "bucket" of the `keyMap` array at a calculated index', () => {
            ht.set('black', '#000000');
            ht.set('white', '#FFFFFF');
            ht.set('rebeccapurple', '#663399');
            expect(ht.keyMap[2]).toEqual([['black', '#000000']]);
            expect(ht.keyMap[3]).toEqual([['rebeccapurple', '#663399']]);
            expect(ht.keyMap[7]).toEqual([['white', '#FFFFFF']]);
        });

        it('should use the same index to store the entry, given the same key', () => {
            ht.set('black', '#000000');
            ht.set('black', '#000000');
            ht.set('black', '#000000');
            expect(ht.keyMap[2]).toEqual([['black', '#000000']]);
            expect(ht.keyMap.filter(Boolean).length).toBe(1);
        });

        it('should handle collisions using a "separate chaining" approach (put several entries in a "bucket" at the same index)', () => {
            ht.set('black', '#000000');
            ht.set('cyan', '#00FFFF');
            expect(ht.keyMap[2]).toEqual([
                ['black', '#000000'],
                ['cyan', '#00FFFF'],
            ]);
            expect(ht.keyMap.filter(Boolean).length).toBe(1);
        });

        it('should override an existing entry if a new value for an existing key is passed', () => {
            ht.set('white', '#FFF');
            expect(ht.keyMap[7]).toEqual([['white', '#FFF']]);
            ht.set('white', '#FFFFFF');
            expect(ht.keyMap[7]).toEqual([['white', '#FFFFFF']]);
            expect(ht.keyMap.filter(Boolean).length).toBe(1);
        });
    });

    describe('get', () => {
        it('should return a correct value for the specified key', () => {
            expect(ht.get('white')).toBe('#FFFFFF');
            expect(ht.get('black')).toBe('#000000');
            expect(ht.get('cyan')).toBe('#00FFFF');
            expect(ht.get('magenta')).toBeUndefined();
        });

        it('should return `undefined` if no value is stored by the specified key', () => {
            expect(ht.get('magenta')).toBeUndefined();
        });
    });

    /**
     * In comparison with Map, `keys`, `values` and `entries` methods return an
     * array rather than a new map iterator object. Also, output might be not in
     * insertion order
     */
    describe('keys', () => {
        it('should return an array containing all the keys', () => {
            expect(ht.keys()).toContain('black');
            expect(ht.keys()).toContain('white');
            expect(ht.keys()).toContain('cyan');
            expect(ht.keys()?.length).toBe(3);
        });
    });

    describe('values', () => {
        it('should return an array containing all the values', () => {
            expect(ht.values()).toContain('#000000');
            expect(ht.values()).toContain('#FFFFFF');
            expect(ht.values()).toContain('#00FFFF');
            expect(ht.values()?.length).toBe(3);
        });
    });

    describe('entries', () => {
        it('should return an array containing all the entries', () => {
            expect(ht.entries()).toContainEqual(['black', '#000000']);
            expect(ht.entries()).toContainEqual(['white', '#FFFFFF']);
            expect(ht.entries()).toContainEqual(['cyan', '#00FFFF']);
            expect(ht.size).toBe(3);
        });
    });

    describe('clear', () => {
        it("should reset a hash table to it's initial state (remove all the entries)", () => {
            expect(ht.clear()).toBeUndefined();
            expect(ht.size).toBe(0);
        });
    });

    describe('delete', () => {
        it('should take a key and remove corresponding entry (if it is present) from a hash table', () => {
            ht.delete('cyan');
            expect(ht.entries()).not.toContainEqual(['cyan', '#00FFFF']);
            expect(ht.size).toBe(2);
        });

        it('should return `true` if corresponding entry is present in a hash table', () => {
            expect(ht.delete('cyan')).toBe(true);
            expect(ht.size).toBe(2);
        });

        it('should return `false` if corresponding entry is not present in a hash table', () => {
            expect(ht.delete('magenta')).toBe(false);
            expect(ht.size).toBe(3);
        });
    });

    describe('has', () => {
        it('should return `true` if an entry with the specified key exists in a hash table', () => {
            expect(ht.has('white')).toBe(true);
        });

        it('should return `false` if an entry with the specified key does not exist in a hash table', () => {
            expect(ht.has('magenta')).toBe(false);
        });
    });

    /* Callback is called once per each entry, but not in insertion order (in comparison with Map) */
    describe('forEach', () => {
        it('should take a callback function and call it once per each entry with value, key and HashTable instance as the arguments', () => {
            const mockFn = vi.fn();
            ht.forEach(mockFn);
            expect(mockFn).toHaveBeenCalledWith('#000000', 'black', ht);
            expect(mockFn).toHaveBeenCalledWith('#FFFFFF', 'white', ht);
            expect(mockFn).toHaveBeenCalledWith('#00FFFF', 'cyan', ht);
            expect(mockFn).toBeCalledTimes(3);
        });

        it('should set `this` context for a callback function to the value passed as the second argument (if provided)', () => {
            const obj = { a: 1 };
            const mockFn = vi.fn();
            ht.forEach(mockFn, obj);
            /* mock.contexts is not supported in Vitest */
            expect(mockFn.mock.instances[0]).toEqual({ a: 1 });
        });
    });
});
