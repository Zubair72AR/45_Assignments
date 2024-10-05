"use strict";
// Assignment - 42
function show_magicians02(nameOfMagicians) {
    nameOfMagicians.forEach((name) => console.log(name));
}
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`);
}
// Create an array of magician's names
let magician_name02 = ["Ayan", "Zohaib", "Babar", "Naseem"];
let great_magicians = make_great(magician_name02);
// Display the great magicians
show_magicians02(great_magicians);
