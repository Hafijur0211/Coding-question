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

// -------------------------------------------------------------------------------------------------------------------------------------------



