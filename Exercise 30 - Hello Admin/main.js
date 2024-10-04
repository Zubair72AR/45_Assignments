"use strict";
// Assignment - 30
// Creating an Array
let userName = ["John", "Admin", "Michael", "Richard", "Smith"];
userName.forEach((user) => {
    // for Admin
    if (user === "Admin") {
        console.log("Hello admin, Would you like to see a status report?");
        // for all other users
    }
    else
        console.log(`Hello ${user}, Thank you for logging in again`);
});
