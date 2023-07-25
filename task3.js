// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    // console.log(newString);
    return newString;
}
reverseString('hello world'); // Output: dlrow olleh



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
const inputArray = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(inputArray);
// console.log(result); // Output: 19



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let elementFrequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    // Count the frequency of each element in the array
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (elementFrequencyMap[currentElement]) {
            elementFrequencyMap[currentElement]++;
        } else {
            elementFrequencyMap[currentElement] = 1;
        }
        // Update the most frequent element and its frequency
        if (elementFrequencyMap[currentElement] > maxFrequency) {
            maxFrequency = elementFrequencyMap[currentElement];
            mostFrequentElement = currentElement;
        }
    }

    return mostFrequentElement;
}
const inputArray3 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result3 = findMostFrequentElement(inputArray3);
// console.log(result3); // Output: 3



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersWithSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no two numbers are found, return an empty array
    return [];
}
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result4 = findTwoNumbersWithSum(sortedArray, targetValue);
// console.log(result4); // Output: [0, 3] (Indices of numbers 1 and 8 that add up to the target value 9)



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero!";
            }
            return num1 / num2;
        default:
            return "Invalid operator!";
    }
}
// console.log(calculator(5, '+', 3));  // Output: 8 (5 + 3)
// console.log(calculator(10, '-', 6)); // Output: 4 (10 - 6)
// console.log(calculator(4, '*', 7));  // Output: 28 (4 * 7)
// console.log(calculator(15, '/', 5)); // Output: 3 (15 / 5)
// console.log(calculator(10, '/', 0)); // Output: "Cannot divide by zero!"
// console.log(calculator(2, '%', 3)); // Output: "Invalid operator!"



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_-+=<>?/[]{}|";

    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword); // Output: A1b@5d-E)9mB (Random password of length 12)


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(romanNumeral) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const current = romanValues[romanNumeral[i]];
        const next = romanValues[romanNumeral[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++; // Skip the next character as it's already considered in the subtraction
        } else {
            result += current;
        }
    }

    return result;
}
// console.log(romanToInt("IX"));   // Output: 9
// console.log(romanToInt("XXI"));  // Output: 21
// console.log(romanToInt("LVIII")); // Output: 58
// console.log(romanToInt("MCMXCIV")); // Output: 1994



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest element found.";
    }

    return secondSmallest;
}
const numbersArray = [5, 2, 9, 1, 7, 3, 6];
// console.log(findSecondSmallest(numbersArray)); // Output: 2

