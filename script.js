//String Manipulation Functions:

//Question 1: Reverse a String: Write a function that reverses a given string.
//Answer:
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// // Example usage:
// var originalString = "Hello, world!";
// var reversed = reverseString(originalString);
// console.log(reversed); // Outputs: "!dlrow ,olleH"


//Question 2: Count Number of Characters: Write a function that counts the number of characters in a given string.
//Answer:
// count NUmber of Character
// function countCharacters(str) {
//     return str.length;
// }

// // Example usage:
// var originalString = "Hello, world!";
// var count = countCharacters(originalString);
// console.log(count); // Outputs: 13

//question 3: Capitalize First Words: Write a function that capitalizes the first letter of each word in a given string.
//Answer:
// Capitalize first words
// function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// // Example usage:
// var originalString = "hello, world!";
// var capitalized = capitalizeWords(originalString);
// console.log(capitalized); // Outputs: Hello, World!

Question 4: Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// MINIMUM NUMBER IN ARRAY
// function findMin(arr) {
//     if (arr.length === 0) {
//         return null; // If array is empty, return null or handle as needed
//     }

//     let min = arr[0]; // Assume first element is the minimum

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]; // Update min if current element is smaller
//         }
//     }

//     return min;
// }

// // Example usage:
// const numbers = [3, 1, 9, 4, 5, 2];
// const minNumber = findMin(numbers);
// console.log("Minimum number:", minNumber); // Outputs: Minimum number: 1

// //maximum number in array
// function findMax(arr) {
//     if (arr.length === 0) {
//         return null; // If array is empty, return null or handle as needed
//     }

//     let max = arr[0]; // Assume first element is the maximum

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; // Update max if current element is larger
//         }
//     }

//     return max;
// }

// // Example usage:
// const numbers = [3, 1, 9, 4, 5, 2];
// const maxNumber = findMax(numbers);
// console.log("Maximum number:", maxNumber); // Outputs: Maximum number: 9




//Question 5: Sum of an Array: Write a function that calculates the sum of an array of numbers.
//Answer:
// function sumArray(arr) {
//     let sum = 0;

//     // Iterate through each element in the array
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; // Add each element to the sum
//     }

//     return sum;
// }

// // Example usage:
// const numbers = [3, 1, 9, 4, 5, 2];
// const totalSum = sumArray(numbers);
// console.log("Sum of array:", totalSum); // Outputs: Sum of array: 24

//Question 6: Filter Array: Implement a function that filters out elements from an array based on a given condition

//Answer:
// Filter array
// function filterArray(arr, condition) {
//     return arr.filter(condition);
// }
// const numbers = [10, 20, 30, 40, 50];

// // Filter out numbers less than 30
// const filteredNumbers = filterArray(numbers, num => num <= 30);

// console.log(filteredNumbers); // Output: [10, 20, 30]

//Question 7: Factorial: Write a function to calculate the factorial of a given number
//Answer:
// //Factorial
// function factorial(n) {
//     // Base case: factorial of 0 is 1
//     if (n === 0) {
//         return 1;
//     }
    
//     // Initialize result to 1
//     let result = 1;
    
//     // Multiply result by each integer from 1 to n
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
    
//     return result;
// }

// // Examples
// console.log(factorial(0)); // Output: 1 (0! = 1)
// console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// console.log(factorial(10)); // Output: 3628800 (10! = 10 * 9 * 8 * ... * 1)

//Create a function to check if a number is prime or not.
// function isPrime(number) {
//     // Prime numbers are greater than 1
//     if (number <= 1) {
//         return false;
//     }

//     // Check for factors from 2 to sqrt(number)
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             // If number is divisible by any i, it's not prime
//             return false;
//         }
//     }

//     // If no divisors found other than 1 and itself, it's prime
//     return true;
// }

// // Examples
// console.log(isPrime(2));   // Output: true (2 is a prime number)
// console.log(isPrime(3));   // Output: true (3 is a prime number)
// console.log(isPrime(4));   // Output: false (4 is not a prime number)
// console.log(isPrime(11));  // Output: true (11 is a prime number)
// console.log(isPrime(17));  // Output: true (17 is a prime number)
// console.log(isPrime(27));  // Output: false (27 is not a prime number)
// console.log(isPrime(29));  // Output: true 


//Question 9: Implement a function to generate the Fibonacci sequence up to a given number of terms.
//Answer:
function generateFibonacci(numTerms) {
    // Initialize an array to store the Fibonacci sequence
    const fibonacciSequence = [];

    // Edge case for 0 terms
    if (numTerms <= 0) {
        return fibonacciSequence; // Return empty array
    }

    // First two terms of Fibonacci sequence
    fibonacciSequence.push(0); // Fibonacci(0) = 0
    if (numTerms === 1) {
        return fibonacciSequence; // Return [0] for 1 term
    }
    fibonacciSequence.push(1); // Fibonacci(1) = 1

    // Generate subsequent terms of Fibonacci sequence
    for (let i = 2; i < numTerms; i++) {
        const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;
}

// Example usage:
console.log(generateFibonacci(0));  // Output: []
console.log(generateFibonacci(1));  // Output: [0]
console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(20)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

