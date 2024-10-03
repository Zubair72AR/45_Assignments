"use strict";
// Assignment - 13
// Storing Mode of Transport name in the Array
let modeOfTransportation = ["Cycle", "Plane", "Bus", "Bike", "Car"];
// Printing Message
console.log(`I would like to own a ${modeOfTransportation[0]}.`);
console.log(`I would like to own a ${modeOfTransportation[1]}.`);
console.log(`I would like to own a ${modeOfTransportation[2]}.`);
console.log(`I would like to own a ${modeOfTransportation[3]}.`);
console.log(`I would like to own a ${modeOfTransportation[4]}.`);
// LOOP = Printing Message
for (let i = 0; i < modeOfTransportation.length; i++) {
    console.log(`I would like to own a ${modeOfTransportation[i]}.`);
}
// FOR Each = Printing Message
modeOfTransportation.forEach((transport) => {
    console.log(`I would like to own a ${transport}.`);
});
// FOR OF LOOP = Printing Message
for (let typeOfTransport of modeOfTransportation) {
    console.log(`I would like to own a ${typeOfTransport}.`);
}
