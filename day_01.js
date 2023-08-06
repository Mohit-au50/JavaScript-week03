// Q-1) Write a function to take input from the user and feed it into an array.
// Take input (in this question only) from the user for length of the array also.

console.log("Enter the length of the array in numbers:");
let arr = Number(require("prompt-sync")()());
let array = [];

console.log(
  "Enter the values/input",
  arr,
  "times and it will be printed in string format:"
);
for (let n = 0; n < arr; n++) {
  let num = Number(require("prompt-sync")()());
  array.push(num);
}
console.log(array);
