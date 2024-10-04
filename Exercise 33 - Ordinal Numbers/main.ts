// Assignment - 33

// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// loop for making Ordinal numbers
for (let ordinalNumber of numbers) {
  if (ordinalNumber === 1) {
    console.log(`${ordinalNumber}st`);
  } else if (ordinalNumber === 2) {
    console.log(`${ordinalNumber}nd`);
  } else if (ordinalNumber === 3) {
    console.log(`${ordinalNumber}rd`);
  } else {
    console.log(`${ordinalNumber}th`);
  }
}
