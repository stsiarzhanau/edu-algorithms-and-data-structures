// www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

export function binarySearch(arr: number[], val: number) {
    let low = 0;
    let high = arr.length - 1;
    let middle = Math.floor((high + low) / 2);

    while (arr[middle] !== val && low <= high) {
        if (val < arr[middle]) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }

        middle = Math.floor((high + low) / 2);
    }

    return val === arr[middle] ? middle : -1;
}

// [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] // 10
//  L                                 M                                       H

// [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
//  L             M               H

// [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
//  L  M       H

// [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
//        LM   H
