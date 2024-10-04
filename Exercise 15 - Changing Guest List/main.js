"use strict";
// Assignment - 15
// Storing Guest in the Array
let guestList2 = [
    "Aman Ali",
    "Amir Khan",
    "Ikram Jan",
    "Nadeem Bhai",
    "Mustanser Bhai",
];
// SPLICE - Removing and Storing name in a variable who can't attend Dinner
let removeGuest = guestList2.splice(2, 1)[0];
// Printing Guest name who can't attend Dinner
console.log(`${removeGuest} can't attend Dinner`);
// PUSH - Adding new Guest in the array
guestList2.push("Afsar Khan");
// FOR Each = Printing Invitation to all remaining Guest
guestList2.forEach((newGuests) => {
    console.log(`${newGuests} you are invited to Dinner.`);
});
