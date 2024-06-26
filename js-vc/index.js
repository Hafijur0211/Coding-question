// 1. How to find the Duplicate elements in a given array

// const arrNumber = [1, 2, 8, 2, 9, 8, 9];
// const duplicate = arrNumber.filter(
//   (ele, index, arr) => arr.indexOf(ele) !== index
// );
// console.log(duplicate);

// Explain

// Array Definition: The array arrNumber is defined with some numbers, including duplicates.

// Filter Method: filter is used to create a new array duplicate containing elements that are duplicates.

// Condition: The condition arr.indexOf(ele) !== index checks if the current element (ele) has appeared before in the array.
// arr.indexOf(ele): Finds the first occurrence index of ele.

// index: The current index of ele.

// If the first occurrence index is not equal to the current index, it means ele is a duplicate.

// Output: The duplicate array, which contains [2, 8, 9], is printed to the console.

// ------------------------------------------------------------------------------------------------------------------------------------

// 2. How to find max and min value in a given array in javascript

/*
const arrNumber = [1, 9, 87, 65, 655];
const maxFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur; 
  });
};
console.log(maxFunction(arrNumber));
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 3. What is difference between '==' and '===' in javascript

// Both are comparison operator
// The difference between both the operator is that '==' is used to compare values whereas '===' is used to compare both value and types

/*
var x = 7;
var y = '7'
// console.log(x==7)
console.log(x===7)
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 4. How to find the second largest value and remove first largest value in array

/*
step 1 : find largest value from array
step 2 : find index of largest value
step 3 : Delete index from array using splice method
step 4 : apply same logic that used for find largest value
*/

/*
const intArray = [2, 8, 9, 7];
const largestValue = (arr) => {
  firstLargestValue = Math.max(...arr);
  index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};
console.log(largestValue(intArray));
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 5. Difference between filter and find method

/*
filter() method return the matched values in an array from the collection 

find() method return the first value that matches from the collection once it matches the value in finding, it will not check the remaining values in the array collection
*/

/*
const empArr = [
  {
    name: "king",
    age: 42,
  },
  {
    name: "ali",
    age: 32,
  },
  {
    name: "ahmed",
    age: 22,
  },
  {
    name: "zain",
    age: 62,
  },
  {
    name: "ayesha",
    age: 52,
  },
  {
    name: "hafsha",
    age: 28,
  },
  {
    name: "sadi",
    age: 27,
  },
  {
    name: "rohma",
    age: 26,
  },
  {
    name: "masooma",
    age: 25,
  },
];

// const filteredItem = empArr.filter((item)=>{
//   return item.age>30
// })

const findItem = empArr.find((item)=>{
  return item.age>30
})

// console.log(filteredItem)
console.log(findItem)

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 6. How to find the missing numbers in a given integer array of 1 to 10

/*

const arrNumbers = [1,2,3,4,5,6,9,10]
const missArray=[]
const missingValue=(arr)=>{
const minValue= Math.min(...arr)
const maxValue=Math.max(...arr)
for(let i = minValue; i<maxValue; i++){
  if(arr.indexOf(i)<0){
    missArray.push(i)
  }
}
return(missArray)
}

console.log(missingValue(arrNumbers))

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 7. How to find even or odd number in a given array in javascript

/*
const numbers = [1, 2, 3, 8, 9, 12, 16];

const even = numbers.filter((item) => {
  return item % 2 === 0;
});
const odd = numbers.filter((item) => {
  return item % 2 !== 0;
});

console.log("odd numbers", odd);
console.log("even numbers", even);
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 8. How to find the sum of all the elements in a given array[] in javascript

/*

const arrNumber = [1,9,6,4]
const sumOfNumbers = (arr)=>{
  return arr.reduce((pre, cur)=>{
    return pre+cur
  })
}

console.log(sumOfNumbers(arrNumber))

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 9. How to find the factorial(n!) of a given number in javascript

/*

// const inputNum = prompt("please enter your number");

const inputNum = 5;

let fact = 1;

if (inputNum < 0) {
  console.log(`Factorial of ${inputNum} is not possible`);
} else {
  for (let i = 1; i <= inputNum; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${inputNum} is ${fact}`);
}

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 10. How to find the prime number in javascript

/*

// var number = prompt("enter number")

let number = 3;

if (number == 1) {
  console.log(`${number} is not prime neither composite`);
} else if (number < 1) {
  console.log(`prime number of ${number} is not possible`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      var result = `${number} is not prime number`;
      break;
    } else {
      var result = `${number} is prime number`;
    }
  }
  console.log(result);
}

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 11. How to find vowels from string in javascript

// Method 1

/*

// const string = prompt("Enter string")

const string = "b";
string = string.toLowerCase();

if (
  string == "a" ||
  string == "e" ||
  string == "i" ||
  string == "o" ||
  string == "u"
) {
  console.log(`${string} is vowel`);
} else {
  console.log(`${string} is not vowel`);
}

*/

// Method 2

/*

// Second method to find the numbers of vowels

var string = "hafijur";

const vowels = ["a", "e", "i", "o", "u"];

const countVowel = (str) => {
  var count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }
  return count;
};

console.log(countVowel(string));

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 12. How to reverse a string in javascript

/*

const reverseString = (str) => {
  var strToArray = str.split("");
  var arrReverse = strToArray.reverse();
  var strReverse = arrReverse.join("");
  return strReverse;
};

// reverseString("butter")
// var arr=['m', 'y']
// console.log(arr.reverse())

console.log(reverseString("butter"));

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 13. How to find palindrome in javascript

/*

// const string = prompt('enter value')

var string = "maam";

string = string.toLowerCase();
const palindromeFind = (str) => {
  // reverse string
  var reverseString = str.split("").reverse().join("");
  if (reverseString === str) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromeFind(string));

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 14. How to swap two variable without using third variable in javascript

/*

let a = 17;
let b = 8;

// with using third variable

// let temp = a;
// a = b;
// b = temp;

// without third variable

[a, b] = [b,a]

console.log(`value of a is ${a} and value of b is ${b}`);

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 15. How to merge two arrays and sort them in javascript

/*

// Method 1

const arr1 = ["1", "8", "9"];
const arr2 = ["45", "7", "190"];

// concat
const finalArr = arr1.concat(arr2);
const sorterdArr1 = finalArr.sort(function (a, b) {
  return a - b;
});

// spread operator

const result = [...arr1, ...arr2];
const sorterdArr2 = finalArr.sort(function (a, b) {
  return a - b;
});
// console.log(result)
console.log(sorterdArr2);

// console.log(finalArr)
// console.log(sorterdArr1);

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 16. How to find factor of a given integer in javascript

/*

const num = 12;
for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}

console.log(`factor of ${num}`);

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 17. Simple calculator in javascript

/*

// const operator = prompt("Please select operator either + - / *")

const operator = "*";

// const num1 = parseFloat(prompt('enter num 1'))
// const num2 = parseFloat(prompt('enter num 2'))

const num1 = 34;
const num2 = 12;

if (operator == "+") {
  result = num1 + num2;
}else if(operator == '-'){
  result= num1 - num2
}else if(operator == '*'){
  result= num1 * num2
}else{
  result= num1 / num2
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

*/

// ------------------------------------------------------------------------------------------------------------------------------------

// 18. How to compare two arrays are equal or not in javascript

/*

var arr1 = [2, 9, 6, 8, 4];
var arr2 = [4, 8, 6, 9, 12];

const isArrSame =
  arr1.length == arr2.length &&
  // indexOf method return -1 if element is not exist in array
  // every method check each and every element fullfil the condition exist in array
  arr1.every((curEle) => {
    if (arr2.indexOf(curEle) > -1) {
      return (curEle = [arr2.indexOf(curEle)]);
    }
  });
console.log(isArrSame);


*/

// ------------------------------------------------------------------------------------------------------------------------------------