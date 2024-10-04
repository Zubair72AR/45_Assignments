"use strict";
// Assignment - 14
// Storing Guest in the Array
let guestList = [
    "Aman Ali",
    "Amir Khan",
    "Ikram Jan",
    "Nadeem Bhai",
    "Mustanser Bhai",
];
// Printing Invitation to Guest
console.log(`Hi, ${guestList[0]} you are invited to Dinner, Today Night.`);
console.log(`Hi, ${guestList[1]} you are invited to Dinner, Today Night.`);
console.log(`Hi, ${guestList[2]} you are invited to Dinner, Today Night.`);
console.log(`Hi, ${guestList[3]} you are invited to Dinner, Today Night.`);
console.log(`Hi, ${guestList[4]} you are invited to Dinner, Today Night.`);
// LOOP = Printing Invitation to Guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Assalam-o-Alaikum, ${guestList[i]} you are invited to Dinner, Tomorrow Night.`);
}
// FOR Each = Printing Invitation to Guest
guestList.forEach((guest) => {
    console.log(`Bro, ${guest} you are invited to Dinner.`);
});
// FOR OF LOOP = Printing Invitation to Guest
for (let guestFromList of guestList) {
    console.log(`${guestFromList} you are invited to Dinner.`);
}
