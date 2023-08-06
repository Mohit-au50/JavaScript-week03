// Q-1) Write a program to print even numbers of an array of numbers using for…of

// sample array is "array"
let array = [5, 12, 7, 20, 9, 24];

// "evenArray" is variable it will store the even number values only, initially its an empty string
let evenArray = [];

// just a message to show on terminal/console
console.log("The given array is:", array, "\n");

// defined a loop in which the index value and the full array is given/mentioned
for (let index of array) {
  // if condition if index value is divisble by 2 then run the if function block
  if (index % 2 == 0) {
    // if condition is true then it will store/push the value inside "evenArray" one by one until the loop is running
    evenArray.push(index);
  }
}
// if/when the loop condition is false it will come out of the loop

// finally it will print the new "evenArray"
console.log("The new array of even numbers is:", evenArray);
