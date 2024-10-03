// Assignment - 12

// Storing some friends name in the Array
let friendsName: string[] = [
  "Babar Azam",
  "Naseem Shah",
  "Fakhar Zaman",
  "Muhammad Rizwan",
  "Azam Khan",
];

// Printing Message for each Person
console.log(`Hi, ${friendsName[0]}, This is me.`);
console.log(`Hi, ${friendsName[1]}, This is me.`);
console.log(`Hi, ${friendsName[2]}, This is me.`);
console.log(`Hi, ${friendsName[3]}, This is me.`);
console.log(`Hi, ${friendsName[4]}, This is me.`);

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
