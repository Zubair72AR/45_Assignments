// Assignment - 03

// Storing a person's name in a variable
let personName:string = "zubair Ahmed";

// Printing a person name in lowercase
console.log("Lowercase", personName.toLowerCase());

// Printing a person name in uppercase
console.log("Uppercase", personName.toUpperCase());

// Printing a person name in titlecase
console.log("Titlecase",personName.replace(/\b\w/g, (capitalLetter) => capitalLetter.toUpperCase()));

