"use strict";
// Assignment - 39
// Write a function called city_country() that takes in the name of a city and its country
function city_country(name, country) {
    // Return a string in the format "City, Country"
    return `${name}, ${country}`;
}
// Call the function with a sample city and country
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("London", "UK"));
