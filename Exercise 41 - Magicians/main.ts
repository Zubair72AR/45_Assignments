// Assignment - 41

// Make an array of magician’s names Pass the array to a function called show_magicians()
function show_magicians(nameOfMagicians: string[]) {
  nameOfMagicians.forEach((name) => console.log(name));
}

// Create an array of magician's names
let magician_name01: string[] = ["Ayan", "Zohaib", "Babar", "Naseem"];

// Call the function with the array of magician's names
show_magicians(magician_name01);
