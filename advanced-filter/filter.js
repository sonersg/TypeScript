var arrayOfNumbers = [0, 1, 2, 3, 4, 5];
function isEven(n) {
    return n % 2 === 0;
}
var evenNumbers = arrayOfNumbers.filter(isEven);
// console.log(evenNumbers)
function getEvenNumbers(arrayToFilter) {
    var evenNums = [];
    for (var _i = 0, arrayToFilter_1 = arrayToFilter; _i < arrayToFilter_1.length; _i++) {
        var num = arrayToFilter_1[_i];
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    }
    return evenNums;
}
// console.log(getEvenNumbers(arrayOfNumbers));
function filterNumbersArray(arrayToFilter, filterFunction) {
    var evenNums = [];
    for (var _i = 0, arrayToFilter_2 = arrayToFilter; _i < arrayToFilter_2.length; _i++) {
        var num = arrayToFilter_2[_i];
        if (filterFunction(num)) {
            evenNums.push(num);
        }
    }
    return evenNums;
}
var evenNumbers2 = filterNumbersArray(arrayOfNumbers, isEven);
// console.log(evenNumbers2);
function filterArray(arrayToFilter, filterFunction) {
    var filteredArray = [];
    for (var _i = 0, arrayToFilter_3 = arrayToFilter; _i < arrayToFilter_3.length; _i++) {
        var x = arrayToFilter_3[_i];
        if (filterFunction(x)) {
            filteredArray.push(x);
        }
    }
    return filteredArray;
}
function isLongString(s) {
    return s.length > 3;
}
var arrayOfString = ["soner", "ben", "ubuntu"];
var longElements = filterArray(arrayOfString, isLongString);
console.log(longElements);
