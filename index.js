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
