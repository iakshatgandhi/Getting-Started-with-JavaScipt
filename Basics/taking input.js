const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for full name
rl.question('Please enter your first and last name separated by a space: ', function(fullName) {
  // Split the full name into an array of parts
  let nameParts = fullName.split(' ');

  // Extract the first and last names
  let firstName = nameParts[0];
  let lastName = nameParts.slice(1).join(' ');

  // Display the extracted names
  console.log("Hello "+ firstName + " " + lastName );

  // Close the readline interface
  rl.close();
});