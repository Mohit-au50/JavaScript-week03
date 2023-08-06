// Q-1) Write a program to print maximum value of an array of numbers using for…of

// sample array is "array"
let array = [1, 5, 7, 18, 9];

// defined a variable to store the max value.
let maxValue = 0;

// then ran a loop from 0 index to the length of the array-1 (because its starting from 0-index that's why array-1)
for (let index of array) {
  // defined a condition if its true then it'll run the if function block
  if (maxValue < index) {
    // if above condition is true then it stores that array index value inside "maxValue" variable
    maxValue = index;
  }
}
/* every time it will increment the index value by 1 until the loop condition is true,
if/when the loop condition is false it will come outside the loop */

// finally it will print the "maxValue" after the loop ends.
console.log("This is the sample array", array);
console.log("The maximum number value of the above array is:", maxValue);
console.log("\ntry changing the array");
