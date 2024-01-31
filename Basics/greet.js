const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for information
rl.question('Please enter your first and last name separated by a space: ', function(fullName){
    rl.question('Please enter your gender (male/female): ', function(gender) {

      // Split the full name into an array of parts
      let nameParts = fullName.split(' ');

      // Extract the first and last names
      let firstName = nameParts[0];
      let lastName = nameParts.slice(1).join(' ');

      // Greet the person based on gender
      let greeting;
      if (gender.toLowerCase() === 'male') {
        greeting = 'Hello, Sir';
      } else if (gender.toLowerCase() === 'female') {
        greeting = 'Hello, Mam';
      }

      // Display the extracted names and greeting
      console.log(greeting + " " + fullName);

      // Close the readline interface
      rl.close();
    });
});