export function insertionSort<T>(arr: T[]) {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}

// 37|, 45, 29, 8, 12, 88, -3 -> skip

// 37, 45|, 29, 8, 12, 88, -3 -> iterate down from 1 (45)

// 29, 37, 45|, 8, 12, 88, -3 -> iterate down from 2 (45)

// 8, 29, 37, 45|, 12, 88, -3 -> iterate down from 3 (45)

// 8, 12, 29, 37, 45|, 88, -3 -> skip

// 8, 12, 29, 37, 45, 88|, -3 -> iterate down from 5 (88)
