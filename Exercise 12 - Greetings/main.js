"use strict";
// Assignment - 12
// Storing some friends name in the Array
let friendsName = [
    "Babar Azam",
    "Naseem Shah",
    "Fakhar Zaman",
    "Muhammad Rizwan",
    "Azam Khan",
];
// LOOP = Printing Message for each Person
for (let i = 0; i < friendsName.length; i++) {
    console.log(`Hallo ${friendsName[i]}, How are you doing today?`);
}
// FOR Each = Printing Message for each Person
friendsName.forEach((friends) => {
    console.log(`Assalam-o-Alaikum ${friends}, will you attend today's class?`);
});
// FOR OF LOOP = Printing Message for each Person
for (let nameOfFriends of friendsName) {
    console.log(`Hi ${nameOfFriends}, Today is my Birthday....!`);
}
