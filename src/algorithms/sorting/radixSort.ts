import { mostDigits, getDigit } from '../../utils';

export function radixSort(integers: number[]) {
    const maxDigitsCount = mostDigits(integers);

    for (let i = 0; i <= maxDigitsCount; i++) {
        const buckets = Array.from({ length: 10 }, () => [] as number[]);

        for (const integer of integers) {
            const digit = getDigit(integer, i);
            buckets[digit].push(integer);
        }

        integers = ([] as number[]).concat(...buckets);
    }

    return integers;
}
