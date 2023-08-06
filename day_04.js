// Q-1) Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };
// Sample Output:
// name,sclass,rollno

// the sammple object is given with the name of "students"
var student = {
  //inside object every value is written in "key: value" format
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

/* Object is the class to call the object and keys is the function,
"keys()" function takes the perameter/value inside it to execute it,
in the above case "student" is the object name so it  will print all the keys Names*/
console.log("All the keys names are:");
console.log(Object.keys(student));

// If you wish to see the values inside every key
console.log("\nAll the values that are inside the keys are:");
console.log(Object.values(student));
