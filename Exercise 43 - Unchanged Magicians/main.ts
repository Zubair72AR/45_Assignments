// Assignment - 43

function show_magicians03(nameOfMagicians: string[]) {
  nameOfMagicians.forEach((name) => console.log(name));
}

function make_great02(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}

// Create an array of magician's names
let magician_name03: string[] = ["Ayan", "Zohaib", "Babar", "Naseem"];

// Creating Copy of an array
let copy_magician_name = magician_name03.slice();

// Call Function to make all names great
let copy_great_magician = make_great02(copy_magician_name);

// Printing both original and copied arrays
console.log("Original Array:");
show_magicians03(magician_name03);

console.log("Copy of Original Array:");
show_magicians03(copy_great_magician);
