// Question 1

// The Data Detective
/*
In the charming village of JavaScriptville, a young detective named Max was known for solving mysterious data cases. One day, the villagers approached Max with an intriguing challenge. They had a magical box that could contain anything - numbers, strings, arrays, or even objects. However, the villagers were unsure about the contents inside the box.
Max's task was to determine the type of the input inside the magical box and report back with the result.

Example 1:
Input:
"4"
Output:
string

Example 2:
Input:
Hello, JavaScriptville!
Output:
string
*/

// Solution without function

// Example inputs

/*
let input1 = "4";
let input2 = "Hello, JavaScriptville!";
let input3 = 123;
let input4 = [1, 2, 3];
let input5 = {a: 1};
let input6 = true;
let input7 = null;
let input8 = undefined;

Determining the type using `typeof` directly

console.log(typeof input1); // Output: string
console.log(typeof input2); // Output: string
console.log(typeof input3); // Output: number
console.log(typeof input4); // Output: object
console.log(typeof input5); // Output: object
console.log(typeof input6); // Output: boolean
console.log(typeof input7); // Output: object (This is a quirk in JavaScript)
console.log(typeof input8); // Output: undefined
*/

// Explanation:
// typeof input1 returns "string" for the input "4".
// typeof input2 returns "string" for the input "Hello, JavaScriptville!".
// typeof input3 returns "number" for the input 123.
// typeof input4 returns "object" for the input array [1, 2, 3].
// typeof input5 returns "object" for the input object {a: 1}.
// typeof input6 returns "boolean" for the input true.
// typeof input7 returns "object" for the input null (a known quirk in JavaScript).
// typeof input8 returns "undefined" for the input undefined.
// This approach directly uses the typeof operator without encapsulating it in a function. You can apply this to any input to determine its type

// Solution with function

/*
function determineType(input) {
    return typeof input;
  }

Example usage:

  console.log(determineType("4")); // Output: string
  console.log(determineType("Hello, JavaScriptville!")); // Output: string
  console.log(determineType(123)); // Output: number
  console.log(determineType([1, 2, 3])); // Output: object (Arrays are considered objects in JavaScript)
  console.log(determineType({a: 1})); // Output: object
  console.log(determineType(true)); // Output: boolean
  console.log(determineType(null)); // Output: object (This is a quirk in JavaScript)
  console.log(determineType(undefined)); // Output: undefined
  */

//   Explanation:
//   typeof is the operator used to get the type of the input.
//   It correctly identifies strings, numbers, booleans, and undefined.
//   For arrays and objects, it will return "object".
//   Note: There is a known quirk in JavaScript where typeof null returns "object".

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question 2

/*
Sum two numbers

In the serene countryside of Mathland, there were two young friends, Lily and Ethan, who loved exploring the beauty of numbers. One sunny afternoon, they stumbled upon an ancient mathematical scroll with a mysterious challenge.
The scroll contained a mystical function named calculateSum, which took two numbers as input and returned their harmonious sum. With excitement in their eyes, Lily and Ethan set out to solve the riddle and uncover the magic hidden within the function.
Can you help Lily and Ethan complete the calculateSum function to unveil the harmonious sum of the two numbers?

Example 1:
Input:
2, 3
Output:
5
*/

// Solution using function

/*
function calculateSum(num1, num2) {
    return num1 + num2;
  }

  Example usage:

  console.log(calculateSum(2, 3)); // Output: 5
  console.log(calculateSum(10, 15)); // Output: 25
  console.log(calculateSum(-5, 7)); // Output: 2
*/

// Explanation:
// The calculateSum function is defined to accept two parameters, num1 and num2.
// Inside the function, we return the sum of num1 and num2 using the + operator.
// The function can be called with any two numbers, and it will return their sum.

// Solution without using function

/*
// Example inputs
let num1 = 2;
let num2 = 3;

// Calculating the sum directly
let sum = num1 + num2;

// Output the result
console.log(sum); // Output: 5
*/

// Explanation:
// We define two variables, num1 and num2, and assign them the values 2 and 3, respectively.
// We then calculate the sum of these two variables using the + operator and store the result in the variable sum.
// Finally, we print the value of sum to the console, which gives the result 5.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 3

/*
The Truth Detector

In the technologically advanced city of Codeville, there was a clever programmer named Ava who created a truth-detecting algorithm. To test its powers, she embarked on a mission to determine the truthfulness of a statement.
The statement was represented by a variable named isTrue, which contained a boolean value. Ava's task was to log the data type of this variable to the console, unlocking the key to the statement's truth.
Can you assist Ava in this important mission by writing a code snippet to reveal the data type of isTrue and uncover the mystery?

Example 1:
Input:
true

Output:
boolean

Example 2:
Input:
false

Output:
boolean

*/

// Solution using function

/*
function detectTruthType(isTrue) {
    console.log(typeof isTrue);
  }
  
  Example usage:

  detectTruthType(true);  // Output: boolean
  detectTruthType(false); // Output: boolean
*/

// Explanation:
// The detectTruthType function is defined to accept one parameter, isTrue.
// Inside the function, the typeof operator is used to determine the data type of the isTrue variable.
// The data type is then logged to the console using console.log.
// By calling the detectTruthType function with different boolean values, the data type "boolean" is logged to the console for both true and false inputs.

// Solution without using function

/*
// Example inputs
let isTrue1 = true;
let isTrue2 = false;

// Using `typeof` to log the data type of the variable isTrue
console.log(typeof isTrue1); // Output: boolean
console.log(typeof isTrue2); // Output: boolean
*/

// Explanation:
// typeof isTrue1 returns "boolean" because isTrue1 is assigned the value true, which is a boolean.
// typeof isTrue2 returns "boolean" because isTrue2 is assigned the value false, which is a boolean.
// The typeof operator is used to determine the data type of the variable and log it to the console.
// This code snippet will log the data type of the isTrue variable, which in both cases will be "boolean".

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 4

/*
Number is even or not

Once upon a time, there was a young boy named William who loved to play with blocks. He would spend hours building towers and castles with his colorful blocks. One day, he decided to build a tower using only even numbers of blocks. He wanted to make sure each layer of his tower had an even number of blocks, but he didn’t know how to check if a number was even or not.
Writing a function that takes a number as input and returns true if it is an even number, and false otherwise. This will help William determine if he can use that number of blocks in his tower.

Example 1:
Input:
4
Output:
true

Example 2:
Input:
5
Output:
false
*/

// Using function 

/*
function isEven(number) {
  return number % 2 === 0;
}

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false
*/

// This function works by using the modulo operator (%). If the remainder when number is divided by 2 is 0, then the number is even; otherwise, it is odd.

// Without using function

/*
// Example 1:
let number1 = 4;
let isEven1 = number1 % 2 === 0;
console.log(isEven1); // Output: true

// Example 2:
let number2 = 5;
let isEven2 = number2 % 2 === 0;
console.log(isEven2); // Output: false
*/

// In these examples, the isEven variable holds the result of the expression number % 2 === 0, which checks if the number is even. This result is then printed to the console.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 5

/*
Nature of number

Once upon a time, there was a magical function that could determine the nature of numbers. It had the power to analyze whether a number was positive, negative, or even zero. With this knowledge, it would whisper a message, revealing the true essence of the number to anyone who sought its guidance. 
Write the function which determine the nature of numbers.
Example 1:
Input:
5
Output:
Positive
Example 2:
Input:
-5
Output:
Negative
Example 3:
Input:
0
Output:
Zero
*/

// Using function 

/*
function determineNature(number) {
  if (number > 0) {
      return "Positive";
  } else if (number < 0) {
      return "Negative";
  } else {
      return "Zero";
  }
}

// Example usage:
console.log(determineNature(5));  // Output: Positive
console.log(determineNature(-5)); // Output: Negative
console.log(determineNature(0));  // Output: Zero
*/

// This determineNature function takes a number as input and returns a string indicating whether the number is positive, negative, or zero. The function uses simple conditional statements to evaluate the nature of the number.

// without using function 

/*
// Example 1:
let number1 = 5;
let nature1;
if (number1 > 0) {
    nature1 = "Positive";
} else if (number1 < 0) {
    nature1 = "Negative";
} else {
    nature1 = "Zero";
}
console.log(nature1); // Output: Positive

// Example 2:
let number2 = -5;
let nature2;
if (number2 > 0) {
    nature2 = "Positive";
} else if (number2 < 0) {
    nature2 = "Negative";
} else {
    nature2 = "Zero";
}
console.log(nature2); // Output: Negative

// Example 3:
let number3 = 0;
let nature3;
if (number3 > 0) {
    nature3 = "Positive";
} else if (number3 < 0) {
    nature3 = "Negative";
} else {
    nature3 = "Zero";
}
console.log(nature3); // Output: Zero
*/

// In each example, we determine the nature of the number using conditional statements and store the result in a variable. Then, we print the result to the console.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 6

/*
Minute converter

Imagine you have a magical time converter. It takes a number of minutes as input and instantly transforms it into the equivalent number of seconds.
Write a function that to help people calculate how many seconds are in a given number of minutes.
Example 1:
Input:
3
Output:
180
Example 2:
Input:
0
Output:
0
*/


// using function 

/*
function minutesToSeconds(minutes) {
  return minutes * 60;
}

// Example usage:
console.log(minutesToSeconds(3)); // Output: 180
console.log(minutesToSeconds(0)); // Output: 0
*/

// This minutesToSeconds function takes the number of minutes as input and returns the equivalent number of seconds by multiplying the input by 60.

// without using function

/*
// Example 1:
let minutes1 = 3;
let seconds1 = minutes1 * 60;
console.log(seconds1); // Output: 180

// Example 2:
let minutes2 = 0;
let seconds2 = minutes2 * 60;
console.log(seconds2); // Output: 0
*/

// In these examples, we directly multiply the number of minutes by 60 to get the number of seconds and then print the result to the console.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Question 7

/*
Palindrome Strings

Sarah is a web developer who wants to create a JavaScript function to check if a given string is a palindrome. She wants to use this function to build a feature that validates whether user input is a palindrome.
Help Sarah by writing a JavaScript function named isPalindrome that takes a string as input and returns true if the string is a palindrome and false otherwise.

Example 1:
Input: "racecar"
Output: true

Example 2:
Input: "hello"
Output: false
*/

// Solution

/*
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
*/

// Explanation:
// Cleaning the String:

// str.replace(/[^A-Za-z0-9]/g, ''): Removes all non-alphanumeric characters.
// .toLowerCase(): Converts the cleaned string to lowercase.
// Reversing the String:

// split(''): Splits the string into an array of characters.
// reverse(): Reverses the array.
// join(''): Joins the reversed array back into a string.
// Comparison:

// cleanedStr === reversedStr: Checks if the cleaned string is the same as its reversed version.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 8

/*
The Sign of Product

In a faraway land of mathematical wonders, a group of curious mathematicians found themselves pondering over the signs of products. They decided to embark on a coding journey to build a function that would determine the sign of the product of three given numbers.
The mathematicians laid down the rules for the function called productSign:
If the product is positive (greater than 0), the function should return 1. If the product is negative (less than 0), the function should return -1. If the product is zero, the function should return 0. The mathematicians were eager to see their function come to life and started coding in JavaScript. However, they faced some challenges in handling different scenarios.
Can you use your coding prowess to assist the mathematicians in creating the function productSign and unraveling the mysteries of the signs of products?

Example 1:
Input:
2, 3, 5

Output:
1

Example 2:
Input:
-4, 6, 0

Output:
0

Example 3:
Input:
-1, -2, -3

Output:
-1

*/

// Solution

/*
function productSign(a, b, c) {
  let product = a * b * c;
  
  if (product > 0) {
      return 1;
  } else if (product < 0) {
      return -1;
  } else {
      return 0;
  }
}

// Example usage:
console.log(productSign(2, 3, 5));    // Output: 1
console.log(productSign(-4, 6, 0));   // Output: 0
console.log(productSign(-1, -2, -3)); // Output: -1
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 9

/*
The Sign Checker

In a land where mathematical wizards roamed, the people needed a function that could determine the signs of three given numbers and return the result as a string. They sought a JavaScript function to aid them in their quest.
Write a JavaScript function called checkSign that takes three numbers as input and returns a string representing the signs of the numbers.
If all three numbers are positive, return "+++" If two numbers are positive and one is negative, return "++-" If one number is positive and two are negative, return "+--" If all three numbers are negative, return "---"

Example 1:
Input:
1, 2, 3

Output:
"+++"

Example 2:
Input:
-1, 2, 3

Output:
"++-"

Example 3:
Input:
-1, -2, 3

Output:
"+--"

Example 4:
Input:
-1, -2, -3

Output:
"---"

*/

// Solution

/*
function checkSign(a, b, c) {
  // Initialize an empty string to store the result
  let result = '';
  
  // Check the sign of each number and append the corresponding character to the result string
  result += (a > 0) ? '+' : '-';
  result += (b > 0) ? '+' : '-';
  result += (c > 0) ? '+' : '-';
  
  return result;
}

// Example usage:
console.log(checkSign(1, 2, 3));    // Output: "+++"
console.log(checkSign(-1, 2, 3));   // Output: "++-"
console.log(checkSign(-1, -2, 3));  // Output: "+--"
console.log(checkSign(-1, -2, -3)); // Output: "---"

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question 10

/*
The Odd or Even Sum

In the mystical land of numbers, there lived a talented JavaScript wizard named Alaric. He possessed a unique power to distinguish between odd and even numbers effortlessly. One day, the people of the land came to him with a puzzling request. They wanted a function that could compute the sum of odd and even numbers separately from a given array of integers.
Determined to help, Alaric began crafting a function called oddOrEvenSum. The function would take an array of integers as input and return an object containing the sum of all odd numbers and the sum of all even numbers found in the array.
With a heart full of curiosity and magic at his fingertips, Alaric delved into the task, creating a solution that showcased his mastery over decision statements. Little did he know that this function would prove invaluable to the people of the mystical land, helping them unravel the secrets hidden within their numbers.
Can you assist Alaric in completing his enchanting oddOrEvenSum function to bring balance to the numbers of the land?
Can you rise to the challenge of the String Splitter and impress your teacher with your coding skills? The challenge awaits, and it's up to you to take it on.

Example 1:
Input: [1, 2, 3, 4, 5]
Output: { oddSum: 9, evenSum: 6 }

Example 2:
Input: [10, 20, 30, 40, 50]
Output: { oddSum: 0, evenSum: 150 }

Example 3:
Input: [7, 13, 42, 31, 55]
Output: { oddSum: 106, evenSum: 42 }

*/

// Solution

/*

function oddOrEvenSum(arr) {
  let oddSum = 0;
  let evenSum = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          evenSum += num;
      } else {
          oddSum += num;
      }
  }

  return { oddSum, evenSum };
}

// Example usage:
console.log(oddOrEvenSum([1, 2, 3, 4, 5]));   // Output: { oddSum: 9, evenSum: 6 }
console.log(oddOrEvenSum([10, 20, 30, 40, 50])); // Output: { oddSum: 0, evenSum: 150 }
console.log(oddOrEvenSum([7, 13, 42, 31, 55])); // Output: { oddSum: 106, evenSum: 42 }

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question 11

/*

The Grade Distributor

In a kingdom where knowledge was highly cherished, the wise scholars developed a system to grade students based on their academic performance. They assigned letter grades "A", "B", "C", "D", and "F" to represent different levels of achievement.
The kingdom needed a function that would analyze a set of numerical scores and distribute the corresponding letter grades to each student. They sought a skilled JavaScript sorcerer to create the distributeGrades function.
The distributeGrades function would take an array of numerical scores as input and return an object containing the count of grades distributed as "A", "B", "C", "D", and "F", respectively, based on the following scale:
Scores from 90 to 100 would receive an "A". Scores from 80 to 89 would receive a "B". Scores from 70 to 79 would receive a "C". Scores from 60 to 69 would receive a "D". Scores below 60 would receive an "F". Eager to leave a mark on the kingdom's education system, the JavaScript sorcerer accepted the challenge. Utilizing decision statements, the sorcerer worked tirelessly to craft a solution that would efficiently distribute the grades and empower the kingdom's educators with valuable insights.
Could you lend your coding expertise to assist the JavaScript sorcerer in completing the distributeGrades function and bestow the gift of knowledge upon the kingdom's students?

Example 1
Input:
[85, 92, 78, 65, 95]

Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }

Example 2
Input:
[76, 81, 60, 55, 88}

Output:
{ A: 0, B: 2, C: 1, D: 1, F: 1 }

Example 3
Input:
[92, 95, 87, 60, 72]

Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }

*/

// Solution


/*

function distributeGrades(scores) {
    // Initialize grade counts
    let gradeCounts = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    // Iterate through each score and distribute grades
    for (let score of scores) {
        if (score >= 90 && score <= 100) {
            gradeCounts.A++;
        } else if (score >= 80 && score <= 89) {
            gradeCounts.B++;
        } else if (score >= 70 && score <= 79) {
            gradeCounts.C++;
        } else if (score >= 60 && score <= 69) {
            gradeCounts.D++;
        } else {
            gradeCounts.F++;
        }
    }

    // Return the grade counts object
    return gradeCounts;
}

// Example usage:
console.log(distributeGrades([85, 92, 78, 65, 95])); // Output: { A: 2, B: 1, C: 1, D: 1, F: 0 }
console.log(distributeGrades([76, 81, 60, 55, 88])); // Output: { A: 0, B: 2, C: 1, D: 1, F: 1 }
console.log(distributeGrades([92, 95, 87, 60, 72])); // Output: { A: 2, B: 1, C: 1, D: 1, F: 0 }


*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 12

/*

Simple Calculator

Alice is a math teacher who wants to create a simple calculator using JavaScript. The calculator should be able to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
Help Alice by creating a JavaScript function called simpleCalculator that takes two numbers and an operator (+, -, *, /) as input and returns the arithmetic operation result.

// Test cases
console.log(simpleCalculator(5, 2, '+')); // 7
console.log(simpleCalculator(5, 2, '-')); // 3
console.log(simpleCalculator(5, 2, '*')); // 10
console.log(simpleCalculator(5, 2, '/')); // 2.5
console.log(simpleCalculator(5, 0, '/')); // "Cannot divide by zero."
console.log(simpleCalculator('5', 2, '+')); // "Invalid input. Please enter numeric values."
console.log(simpleCalculator(5, 2, '&')); // "Unsupported operator. Please enter a valid operator (+, -, *, /)."

*/

// Solution

/*
function simpleCalculator(num1, num2, operator) {
    // Check if inputs are numeric
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter numeric values.";
    }

    // Perform the arithmetic operation based on the operator
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Check if dividing by zero
            if (num2 === 0) {
                return "Cannot divide by zero.";
            }
            return num1 / num2;
        default:
            return "Unsupported operator. Please enter a valid operator (+, -, *, /).";
    }
}

// Test cases
console.log(simpleCalculator(5, 2, '+')); // 7
console.log(simpleCalculator(5, 2, '-')); // 3
console.log(simpleCalculator(5, 2, '*')); // 10
console.log(simpleCalculator(5, 2, '/')); // 2.5
console.log(simpleCalculator(5, 0, '/')); // "Cannot divide by zero."
console.log(simpleCalculator('5', 2, '+')); // "Invalid input. Please enter numeric values."
console.log(simpleCalculator(5, 2, '&')); // "Unsupported operator. Please enter a valid operator (+, -, *, /)."

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 13

/*
The Word Reverser

In a realm of linguistic marvels, a task has been bestowed upon you to create a JavaScript function that can reverse the order of words in a given string. The people of the realm are eager to explore the magic of word reversal to unlock hidden meanings within their sentences.
Write a JavaScript function called reverseWords that takes a sentence (a string containing multiple words separated by spaces) as input and returns the sentence with the order of words reversed.

Example 1:
Input:
"Hello, world!"

Output:
"world! Hello,"
*/

// Solution

/*
function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Reverse the array of words
    const reversedWords = words.reverse();
  
    // Join the reversed array of words back into a string
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage
  const input = "Hello, world!";
  const output = reverseWords(input);
  console.log(output); // Output: "world! Hello,"
  
  */

// Splitting the Sentence: The input sentence is split into an array of words using the split(' ') method, where the delimiter is a space.

// Reversing the Array: The array of words is then reversed using the reverse() method.

// Joining the Words: The reversed array of words is joined back into a string using the join(' ') method, with a space as the delimiter.

// Returning the Result: The function returns the resulting string with the words in reverse order.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question -14

/*
Palindrome Detector

In the mystical land of characters and strings, a group of adventurers seeks to identify palindromes—words or phrases that read the same forwards and backwards. To aid them in their quest, they need a JavaScript function that can determine whether a given string is a palindrome.
Write a JavaScript function called isPalindrome that takes a string as input and returns true if it is a palindrome, and false otherwise.
A palindrome is case-sensitive and should be read from left to right and right to left in the same way.

Example 1:
Input:
"racecar"

Output:
true+

Example 2:
Input:
"hello"

Output:
false
*/

/*
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the original string is equal to the reversed string
  return cleanStr === reversedStr;
}

// Example usage
const input1 = "racecar";
const output1 = isPalindrome(input1);
console.log(output1); // Output: true

const input2 = "hello";
const output2 = isPalindrome(input2);
console.log(output2); // Output: false

*/

/*
Cleaning the String: The input string is cleaned by removing all non-alphanumeric characters and converting it to lowercase, similar to the previous approach.

Reversing the String: The cleaned string is reversed by splitting it into an array of characters, reversing the array, and then joining the characters back into a string.

Comparing Strings: The function checks if the cleaned original string is equal to the reversed string. If they are equal, the function returns true, indicating that the input string is a palindrome; otherwise, it returns false.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question -15

/*
The Array Rotator

In the land of cyclical arrays, the people need a JavaScript function that can rotate an array by a given number of positions to the right. They seek to shift their array elements in a circular manner, enabling them to explore new possibilities with their data.
Write a JavaScript function called rotateArray that takes an array of integers and a positive integer k as inputs. The function should rotate the array k positions to the right.
Note: The value of k can be greater than the length of the array, so multiple rotations might be needed.

Example 1:
Input:
[1, 2, 3, 4, 5]

2

Output:

[4, 5, 1, 2, 3]

Example 2:

[7, 8, 9]

5

Output:
[ 8, 9, 7 ]
*/

// Solution

/*
function rotateArray(arr, k) {
  // Calculate the effective number of rotations
  const rotations = k % arr.length;

  // If there are no rotations needed, return the original array
  if (rotations === 0) {
    return arr;
  }

  // Split the array into two parts based on the number of rotations
  const rotatedPart = arr.splice(-rotations); // remove the last 'rotations' elements
  arr.unshift(...rotatedPart); // add the removed elements to the beginning of the array

  return arr;
}

// Example usage
const input1 = [1, 2, 3, 4, 5];
const k1 = 2;
const output1 = rotateArray(input1, k1);
console.log(output1); // Output: [4, 5, 1, 2, 3]

const input2 = [7, 8, 9];
const k2 = 5;
const output2 = rotateArray(input2, k2);
console.log(output2); // Output: [8, 9, 7]

*/

/*
Calculate Effective Rotations: Similar to the previous implementation, calculate the effective number of rotations.

Handle No Rotations: If no rotations are needed, return the original array.

Split and Manipulate Array: Use splice to remove the last rotations elements from the array, and then use unshift along with the spread operator (...) to add the removed elements to the beginning of the array.

Return the Result: Return the rotated array.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 16

/*
 The JSON Parser

In a world of data exchange, the people need a JavaScript function that can parse JSON strings and convert them into JavaScript objects. They seek the power to transform their data structures seamlessly, enabling communication and understanding between systems.
Write a JavaScript function called parseJSON that takes a JSON string as input and returns the corresponding JavaScript object. Assume that the input JSON string will always be valid.

Example 1:
Input:
{"name": "John", "age": 30, "isStudent": true}

Output:
{ name: 'John', age: 30, isStudent: true }

Example 2:
Input:
{"colors": ["red", "green", "blue"], "length": 3}

Output:
{ colors: ['red', 'green', 'blue'], length: 3 }

Example 3:
Input:
{"colors": ["red", "green", "blue"], "length": 3}

Output:
{ colors: ['red', 'green', 'blue'], length: 3 }
*/

// Solution

/*
function parseJSON(jsonString) {
  return JSON.parse(jsonString);
}

// Example usage
const input1 = '{"name": "John", "age": 30, "isStudent": true}';
const output1 = parseJSON(input1);
console.log(output1); // Output: { name: 'John', age: 30, isStudent: true }

const input2 = '{"colors": ["red", "green", "blue"], "length": 3}';
const output2 = parseJSON(input2);
console.log(output2); // Output: { colors: ['red', 'green', 'blue'], length: 3 }

*/

/*
This function simply takes a JSON string as input and returns the corresponding JavaScript object using JSON.parse(). Since the input JSON string is assumed to always be valid, there's no need for additional error handling in this function.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 17

/*
The Object Merger

In a world of data amalgamation, the people need a JavaScript function that can merge two objects into a single, unified object. They seek to combine the strengths of multiple objects to create a comprehensive data structure.
Write a JavaScript function called mergeObjects that takes two objects as inputs and returns a new object that combines the properties of both objects. If there are overlapping properties, the value from the second object should take precedence.

Example 1:
Input:
{ "name": "John", "age": 30 }

{ "isStudent": true, "age": 25 }

Output:
{ name: "John", age: 25, isStudent: true }
Example 2:
Input:
{ "a": 1, "b": 2 } { "c": 3 }

Output:
{ a: 1, b: 2, c: 3 }
*/

// Solution

// Using object spread syntax:

/*
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Example usage
const input1 = { "name": "John", "age": 30 };
const input2 = { "isStudent": true, "age": 25 };
const output1 = mergeObjects(input1, input2);
console.log(output1); // Output: { name: "John", age: 25, isStudent: true }

const input3 = { "a": 1, "b": 2 };
const input4 = { "c": 3 };
const output2 = mergeObjects(input3, input4);
console.log(output2); // Output: { a: 1, b: 2, c: 3 }

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 18

/*
The Nested Object Finder

In a world of complex data structures, the people need a JavaScript function that can find the value of a given property within a nested object. They seek to explore the depths of their data and retrieve valuable information.
Write a JavaScript function called findNestedValue that takes an object and a string representing the property path as inputs. The property path will be a dot-separated string, representing the hierarchy of nested properties.
The function should return the value of the property if found within the nested object. If the property is not found or any intermediate property is not an object, the function should return null.

Example 1:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.name

Output:
John

Example 2:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.city

Output:
New York
Example 3:
Input:
{"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}}

person.address.postalCode

Output:
null
*/

/*
function findNestedValue(obj, propertyPath) {
  // Split the property path into an array of property names
  const pathArray = propertyPath.split('.');

  // Initialize a variable to hold the current object
  let currentObj = obj;

  // Iterate through the property names in the path
  for (let propName of pathArray) {
    // Check if the current object is not an object or if the property doesn't exist
    if (typeof currentObj !== 'object' || !currentObj.hasOwnProperty(propName)) {
      return null;
    }
    
    // Update the current object to the value of the nested property
    currentObj = currentObj[propName];
  }

  // Return the value of the last property in the path
  return currentObj;
}

// Example usage
const input1 = {"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};
console.log(findNestedValue(input1, "person.name")); // Output: John

const input2 = {"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};
console.log(findNestedValue(input2, "person.address.city")); // Output: New York

const input3 = {"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};
console.log(findNestedValue(input3, "person.address.postalCode")); // Output: null

*/


/*
This function splits the property path into an array of property names, then iterates through each property name, checking if the current object is an object and if the property exists. If any intermediate property is not found or is not an object, it returns null. Otherwise, it updates the current object to the value of the nested property. Finally, it returns the value of the last property in the path.
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question - 19

/*
Full Name

In a small town, there was a young girl named Emma who loved to write stories. One day, her teacher gave her a challenge. She was asked to write a function called getFullName() that could take a first name and a last name as parameters and return the full name as a string.
Emma knew that a full name is the combination of a person's first name and last name. She set out to solve the problem and write a function called getFullName() that could take a first name and last name as parameters and return the full name as a string.
Can you help Emma solve this problem? Can you write a function called getFullName() that takes a first name and last name as parameters and returns the full name as a string?

Example 1:
Input: firstName = "John" lastName = "Doe"
Output: "John Doe"

Example 2:
Input: firstName = "Alice" lastName = "Smith"
Output: "Alice Smith"
*/

/*

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Example usage:
console.log(getFullName("John", "Doe")); // Output: "John Doe"
console.log(getFullName("Alice", "Smith")); // Output: "Alice Smith"


*/

/*
In this function, getFullName takes two parameters, firstName and lastName, and returns a string that combines them with a space in between. This is the simplest way to achieve the desired functionality.
*/

// Question - 19

/*
Find a Prime

In a land of numbers and mathematics, there was a young boy named Isaac who loved to solve puzzles and problems. One day, his teacher gave him a challenge. He was asked to write a function called isPrime() that could take a number as a parameter and return true if it was a prime number, and false otherwise.
Isaac knew that a prime number is a positive integer greater than 1 that is divisible by only 1 and itself. He set out to solve the problem and write a function called isPrime() that could take a number as a parameter and determine if it was a prime number.
Can you help Isaac solve this problem? Can you write a function called isPrime() that takes a number as a parameter and returns true if it is a prime number, and false otherwise?

Example 1:
Input: 7
Output: true

Example 2:
Input: 12
Output: false
*/

/*

function isPrime(number) {
    // A prime number is greater than 1
    if (number <= 1) {
        return false;
    }
    
    // Check for factors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    // If no factors are found, the number is prime
    return true;
}

// Example usage:
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false


*/

/*
Explanation:

Initial Check: If the number is less than or equal to 1, it's not prime.
Loop to Check Divisors: We loop from 2 up to the square root of the number. The reason for going only up to the square root is that if n = a * b, then one of the factors (a or b) must be less than or equal to the square root of n. This reduces the number of iterations and makes the function more efficient.
Divisibility Check: Inside the loop, if the number is divisible by any of these values, it's not a prime number.
Return Result: If no divisors are found, the number is prime.
This method is efficient and works well for the purpose of checking prime numbers.
*/

// Question - 21

/*

 Number of Occurrences

Once upon a time, there was a young girl named Alice who loved to collect seashells. Every day, she would go to the beach and gather as many seashells as she could find. One day, she decided to count how many of each type of seashell she had collected. She laid out all her seashells in a row and started counting, but soon realized that it was taking too long. She wished there was an easier way to count the occurrences of each type of seashell in her collection.
Can you help Alice by writing a function countOccurrences() that takes an array of numbers representing the different types of seashells and a target number representing the type of seashell she wants to count, and returns the number of times the target number appears in the array?
Example 1:
Input: numbers = [1, 2, 3, 4, 2, 5, 2] target = 2
Output: 3

Example 2:
Input: numbers = numbers = [1, 1, 1, 1] target = 5
Output: 0

*/

/*

function countOccurrences(numbers, target) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countOccurrences([1, 2, 3, 4, 2, 5, 2], 2)); // Output: 3
console.log(countOccurrences([1, 1, 1, 1], 5)); // Output: 0


*/

/*

Initialize a Counter: Start by initializing a variable count to 0. This will keep track of the number of times the target appears in the array.
Loop Through the Array: Use a for loop to iterate through each element of the array.
Check Each Element: Inside the loop, use an if statement to check if the current element is equal to the target. If it is, increment the count by 1.
Return the Count: After the loop has finished, return the count which now contains the number of occurrences of the target in the array.

*/

/*

function countOccurrences(numbers, target) {
    return numbers.filter(number => number === target).length;
}

// Example usage:
console.log(countOccurrences([1, 2, 3, 4, 2, 5, 2], 2)); // Output: 3
console.log(countOccurrences([1, 1, 1, 1], 5)); // Output: 0


*/

/*
Explanation:

Filter Method: Use the filter method on the numbers array to create a new array that only contains elements equal to the target.
Arrow Function: The filter method takes a callback function as an argument. This callback function takes each element (number) of the array and returns true if it matches the target, effectively filtering out all other elements.
Length Property: Get the length of the resulting filtered array using the length property. This length represents the number of times the target appears in the original numbers array.
*/

// Question - 22

/*
Addition with closures

Once upon a time, there was a young boy named Jack who loved to play with numbers. He would spend hours adding, subtracting, multiplying and dividing numbers in his head. One day, he discovered a new game where he had to add a given number to another number as quickly as possible. He found the game challenging and fun, but wished there was an easier way to add the numbers without having to do the calculation every time.
Can you help Jack by writing a closure function that takes a given number as a parameter and returns a new function that takes another number as a parameter and adds it to the given number?

Example 1:
Input: 3
Output: 8

Example 2:
Input: 7
Output: 12
*/

/*
function createAdder(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Example usage:
const addFive = createAdder(5);
console.log(addFive(3)); // Output: 8

const addSeven = createAdder(7);
console.log(addSeven(5)); // Output: 12

*/

/*
Explanation:

Outer Function (createAdder): This function takes a parameter firstNumber and returns an inner function.
Inner Function: The inner function takes another parameter secondNumber and returns the sum of firstNumber and secondNumber.
Closure: The inner function has access to the variables of the outer function even after the outer function has returned. This is what makes it a closure.
Example Usage: When you call createAdder(5), it returns a function that will add 5 to any number you pass to it. Similarly, createAdder(7) returns a function that will add 7 to any number you pass to it.
*/

// Question 23

/*

Second smallest number

Once upon a time, there was a young girl named Lily who loved to bake cookies. She would spend hours in the kitchen, mixing ingredients and trying out new recipes. One day, she decided to have a cookie baking competition with her friends. Each friend would bring their best batch of cookies, and they would all taste and judge each other’s cookies. Lily wanted to give a prize to the friend who baked the second-best batch of cookies, but she didn’t know how to determine the winner.
Can you help Lily by writing a function that takes an array of integers representing the scores given by the judges to each batch of cookies, and returns the second smallest number, representing the score of the second-best batch of cookies?
Example 1:
Input: num = [5, 2, 8, 1, 9]
Output: 2

*/

/*

function secondSmallest(nums) {
    if (nums.length < 2) {
        throw new Error("Array must contain at least two elements");
    }
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Return the second smallest element
    return nums[1];
}

// Example usage:
console.log(secondSmallest([5, 2, 8, 1, 9])); // Output: 2
console.log(secondSmallest([3, 4, 1, 2])); // Output: 2
console.log(secondSmallest([10, 10, 10, 10])); // Output: 10 (if duplicates are treated as unique)



*/

/*

Explanation:
Input Validation: Check if the array has at least two elements. If not, throw an error because it's impossible to find the second smallest element in an array with fewer than two elements.
Sorting: Use the sort method to sort the array in ascending order. The comparison function (a, b) => a - b ensures numerical sorting.
Return the Second Smallest Element: After sorting, the second smallest element is at index 1 (the second position) in the array.

*/

// Question 24

/*
Removing Duplicates

Once upon a time, there was a young boy named Max who loved to collect stamps. He would spend hours sorting through his collection, admiring the different designs and colors. One day, he decided to organize his collection by removing any duplicate stamps. He started going through his collection one stamp at a time, but soon realized that it was taking too long. He wished there was an easier way to remove the duplicates and keep only the unique stamps.
Can you help Max by writing a function that accepts an array of numbers representing the different stamps in his collection, and returns a new array with only the unique numbers, representing the unique stamps in his collection?
Example 1:
Input: nums = [1, 2, 3, 2, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

/*

function removeDuplicates(nums) {
    // Create a new Set from the array to remove duplicates
    const uniqueNums = new Set(nums);
    
    // Convert the Set back to an array
    return [...uniqueNums];
}

// Example usage:
console.log(removeDuplicates([1, 2, 3, 2, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


*/

/*
Explanation:
Set: A Set is a collection of unique values. When you create a Set from an array, it automatically removes any duplicate values.
Spread Operator (...): The spread operator is used to convert the Set back into an array.
Function: The removeDuplicates function takes an array (nums) as input, converts it to a Set to remove duplicates, and then converts it back to an array using the spread operator.
*/