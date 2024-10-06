// Assignment - 18

// Storing Cities in the Array
let cityToVisit: string[] = ["Makkah", "Lahore", "New York", "Gaza", "Dubai"];

// Print your array in its original order
console.log("Original Order:", cityToVisit);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", cityToVisit.slice().sort());

// Show that your array is still in its original order by printing it
console.log("Original Order:", cityToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(
  "Alphabetical Reverse Order:",
  cityToVisit.slice().sort().reverse()
);

// Show that your array is still in its original order by printing it again.
console.log("Original Order:", cityToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.
cityToVisit.reverse();
console.log("Reversed Original Order:", cityToVisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
cityToVisit.reverse();
console.log("Reversed Back Original Order:", cityToVisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
cityToVisit.slice().sort();
console.log("Original Alphabetical Order:", cityToVisit);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
cityToVisit.reverse();
console.log("Reversed Alphabetical Order:", cityToVisit);
