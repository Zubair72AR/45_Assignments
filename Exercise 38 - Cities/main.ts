// Assignment - 38

// Function called describe_city() that accepts the name of a city and its country
function describe_city(city: string, country: string = "Pakistan") {
  // Printing the description of the city and its country
  console.log(`${city} is in The ${country}.`);
}

// Calling the describe_city() function

describe_city("Lahore");
describe_city("Karachi");
describe_city("Beijing", "China");
