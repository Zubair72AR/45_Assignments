// Assignment - 11

// Storing some friends name in the Array
let names: string[] = [
  "Babar Azam",
  "Naseem Shah",
  "Fakhar Zaman",
  "Muhammad Rizwan",
  "Azam Khan",
];

// LOOP = Printing each Person name
for (let i = 0; i < names.length; i++) {
  console.log("Loop:", names[i]);
}

// FOR Each = Printing each Person name
names.forEach((friends) => {
  console.log("ForEach:", friends);
});

// FOR OF LOOP = Printing each Person name
for (let friendName of names) {
  console.log("For of Loop:", friendName);
}
