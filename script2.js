//////String Manipulation Functions////////

//1. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));


//2. Function to count the number of strings
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello"));


//3. Function to capitalize a string
function capitalizeString(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeString("hello world"));

// <--- Array Functions --->
var arr = [1, 2, 3, 4, 5, 6]
//1. Function to find the maximum value in an array:
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(arr));

//2. Function to find the minimum value in an array:
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin(arr));

//3. Function to calculate the sum of all elements in an array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray(arr));

//3. Function to filter out elements from an array based on a given condition:
function filterArray(arr) {
    var filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            filteredArray.push(arr[i]);
        }
    }
    console.log('"filtered array: returning only elements divisible by 2"');
    return filteredArray;
}
console.log(filterArray(arr));


// <--- Mathematical Functions --->
//1. Factorial:
function givenNum(i) {
    if (i > 1) {
        return givenNum(i - 1)* i;
    }
    return 1
}
console.log(givenNum(5));

//2 Prime Number Function:
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));

//3. Fibonacci Sequence:
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(8));