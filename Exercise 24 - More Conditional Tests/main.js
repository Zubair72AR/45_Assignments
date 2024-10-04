"use strict";
// Assignment - 24
// Tests for Equality and Inequality with strings
let orange = "orange";
// Tests for Equality
console.log("is orange is == orange?");
console.log(orange == "orange");
// Tests for Inequality
console.log("is orange is != orange?");
console.log(orange != "orange");
// Tests using the lower case function
let mango = "MANGO";
// Tests for Equality
console.log("after converting to lowerCase mango is == mango?");
console.log(mango.toLocaleLowerCase() == "mango");
// Tests for Inequality
console.log("after converting to lowerCase mango is != mango?");
console.log(mango.toLocaleLowerCase() != "mango");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
// Tests for Equality
console.log("ten == 10?");
console.log(ten == 10);
// Tests for Inequality
console.log("ten != 10?");
console.log(ten != 10);
// Tests for Greater Than
console.log("ten > 5?");
console.log(ten > 5);
// Tests for less Than
console.log("ten < 8?");
console.log(ten < 8);
// Tests for Greater Than or Equal
console.log("ten >= 10?");
console.log(ten >= 10);
// Tests for less Than or Equal
console.log("ten <= 2?");
console.log(ten <= 2);
// Tests using "and &&" operators
// True
console.log("ten == 10 && ten > 5?");
console.log(ten == 10 && ten > 5);
// False
console.log("ten == 10 && ten < 5?");
console.log(ten == 10 && ten < 5);
// Tests using "or ||" operators
// True
console.log("ten == 10 || ten > 50?");
console.log(ten == 10 || ten > 50);
// False
console.log("ten == 100 || ten < 5?");
console.log(ten == 100 || ten < 5);
// Creating a array
let colorArray = ["Red", "Blue", "Green", "Yellow"];
// TTest whether an item is in a array
console.log("Does array include Green color?");
console.log(colorArray.includes("Green"));
// Test whether an item is not in a array
console.log("Does array not include Green color?");
console.log(!colorArray.includes("Green"));
