"use strict";
// Assignment - 31
// Creating an Array
let userName2 = ["John", "Admin", "Michael", "Richard", "Smith"];
// userName2 = [];
if (userName2.length === 0) {
    console.log("We need to find some users!");
}
else {
    userName2.forEach((user) => {
        // for Admin
        if (user === "Admin") {
            console.log("Hello admin, Would you like to see a status report?");
            // for all other users
        }
        else
            console.log(`Hello ${user}, Thank you for logging in again`);
    });
}
