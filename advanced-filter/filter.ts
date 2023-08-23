// tsc filter.ts -w

const arrayOfNumbers = [0, 1, 2, 3, 4, 5];

function isEven(n: number): boolean {
    return n % 2 === 0;
}

const evenNumbers = arrayOfNumbers.filter(isEven);

// console.log(evenNumbers)

function getEvenNumbers(arrayToFilter: Array<number>): Array<number> {
    let evenNums: number[] = [];

    for (let num of arrayToFilter) {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    }

    return evenNums;
}

// console.log(getEvenNumbers(arrayOfNumbers));

function filterNumbersArray(
    arrayToFilter: Array<number>,
    filterFunction: (element: number) => boolean
): Array<number> {
    let evenNums: number[] = [];

    for (let num of arrayToFilter) {
        if (filterFunction(num)) {
            evenNums.push(num);
        }
    }

    return evenNums;
}

const evenNumbers2 = filterNumbersArray(arrayOfNumbers, isEven);

// console.log(evenNumbers2);

function filterArray<t>(
    arrayToFilter: Array<t>,
    filterFunction: (element: t) => boolean
): Array<t> {
    let filteredArray: t[] = [];

    for (let x of arrayToFilter) {
        if (filterFunction(x)) {
            filteredArray.push(x);
        }
    }

    return filteredArray;
}

function isLongString(s: string): boolean {
    return s.length > 3;
}

const arrayOfString = ["soner", "ben", "ubuntu"];

const longElements = filterArray(arrayOfString, isLongString);

console.log(longElements);
