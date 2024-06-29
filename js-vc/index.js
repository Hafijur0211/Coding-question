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