// Assignment - 37

// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
function make_shirt2(
  size: string = "Large",
  text: string = "I love TypeScript"
) {
  console.log(
    `The size of the t-shirt is "${size}"\nThe message to be printed "${text}"`
  );
}

// Call the function with different size and message
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "Just Love Codings");
