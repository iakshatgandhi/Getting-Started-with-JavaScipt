const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to manually reverse all elements in an array
function reverseArrayManually(arr) {
    // Calculate the midpoint of the array
    let mid = Math.floor(arr.length / 2);
  
    // Swap elements from the beginning to the midpoint
    for (let i = 0; i < mid; i++) {
      // Swap elements using a temporary variable
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  
    return arr;
  }
rl.question('Enter space-separated numbers: ', (input) => {
    // Splitting the input string into an array of strings
    const numbersAsString = input.split(' ');
  
    // Converting strings to numbers and storing them in an array
    const arr = numbersAsString.map(Number);
    console.log("Original Array: ", arr);
    console.log('\n');
    console.log("Reversed Array (Manually): ");
    let reversedArray = reverseArrayManually(arr);
    process.stdout.write(reversedArray.join(' '));
    rl.close();
});
  