"use strict";
// Assignment - 45
// function
function create_car(manufacturer, model, ...option) {
    let car = { manufacturer, model };
    option.forEach(([key, value]) => (car[key] = value));
    return car;
}
// Example usage
let my_car01 = create_car("Toyota", "Corolla", ["color", "white"], ["year", 2014]);
console.log(my_car01);
