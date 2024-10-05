// Assignment - 44

// Write a function that accepts a array of items a person wants on a sandwich

function makeSandwich(...items: string[]) {
  // Heading
  console.log("\nMaking sandwich below given items:\n");
  // Items
  items.forEach((item) => console.log(item));
  // Description
  console.log("Enjoy your Sandwich......!");
}

// Calling this function
makeSandwich("Chicken", "Cheese", "Eggs");
makeSandwich("Bread", "Lettuce", "Tomatoes", "Cheese", "Mayo");
makeSandwich("Bread", "Lettuce", "Butter", "Tomatoes", "Cheese", "Mayo");
