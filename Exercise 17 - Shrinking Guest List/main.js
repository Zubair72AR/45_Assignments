"use strict";
// Assignment - 17
// Storing Guest in the Array
let guestList4 = [
    "Imran Khan",
    "Aman Ali",
    "Amir Khan",
    "Zubair AR",
    "Ikram Jan",
    "Nadeem Bhai",
    "Afsar Khan",
];
// Announcing that We have only two seats
console.log("Sorry, we can invite only two people due to dinner table space unavailability");
// Apologizing guests, send message for not invited and removing them
while (guestList4.length > 2) {
    let removeGuest = guestList4.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry..! ${removeGuest} We can not Invite you`);
    }
}
// Printing a message to each of the two people still on list
guestList4.forEach((remainGuest) => {
    console.log(`Dear ${remainGuest} You are lucky, Invited to the Dinner`);
});
// Removing the last two names from list
guestList4.splice(0, guestList4.length);
// Printing list to make sure that we have an empty list
console.log("List at the end of Program:", guestList4);
