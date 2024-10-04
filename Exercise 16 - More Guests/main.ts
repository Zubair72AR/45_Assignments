// Assignment - 16

// Storing Guest in the Array
let guestList3: string[] = [
  "Aman Ali",
  "Amir Khan",
  "Ikram Jan",
  "Nadeem Bhai",
];

// Announcing that i found a bigger table
console.log("Hurry! we have found a bigger table");

// UNSHIFT - Adding new Guest to the beginning of Array
guestList3.unshift("Imran Khan");

// SPLICE - Adding one new guest to the middle of array
guestList3.splice(Math.floor(guestList3.length / 2), 0, "Zubair AR");

// PUSH - Adding new Guest to the end array
guestList3.push("Afsar Khan");

// FOR Each = Printing Invitation to all Guest
guestList3.forEach((newGuests) => {
  console.log(`Dear ${newGuests} you are invited to Dinner.`);
});
