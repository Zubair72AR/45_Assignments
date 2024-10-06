// Assignment - 45

// Define Type for the CarInfo function
type CarInfo = {
  manufacturer: string;
  model: string;
  [key: string]: string | number;
};
// function
function create_car(
  manufacturer: string,
  model: string,
  ...option: [string, string | number][]
): CarInfo {
  let car: CarInfo = { manufacturer, model };
  option.forEach(([key, value]) => (car[key] = value));
  return car;
}

// Example usage
let my_car01 = create_car(
  "Toyota",
  "Corolla",
  ["color", "white"],
  ["year", 2014]
);

console.log(my_car01);
