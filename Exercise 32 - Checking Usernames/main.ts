// Assignment - 32

// Array of current_users
let current_users: string[] = ["Babar", "Rizwan", "naseem", "Asif", "Shaheen"];
// Array of new_users
let new_users: string[] = ["Azam", "Malik", "NaseeM", "ASIF", "Hasnain"];

new_users.forEach((newUser) => {
  let userCondition = current_users.some(
    (currentUser) =>
      currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase()
  );
  // if userName is taken already
  if (userCondition) {
    console.log(`Sorry, ${newUser} is already taken`);
    // if userName is available
  } else {
    console.log(`Welcome, ${newUser} is available`);
  }
});
