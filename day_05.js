// Q-1) Write a function to convert an array of string of numbers into a number and multiply it by 10.
// Input: [‘1’,‘2’,‘3’,‘4’,‘5’,‘6’]
// Output: 1234560

// sample array is "array"
let array = [1, 2, 3, 4, 5, 6];

/* I have defined a variable "newArr" to store the final array value,
because ".join()" function does not change the value in place, then I multiplyed the value by 10 */
let newArr = array.join("") * 10;

// In the end I printed the value inside "newArr"
console.log(newArr);
