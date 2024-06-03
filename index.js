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