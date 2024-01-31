const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter space-separated numbers
rl.question('Enter space-separated numbers: ', (input) => {
  // Splitting the input string into an array of strings
  const numbersAsString = input.split(' ');

  // Converting strings to numbers and storing them in an array
  const numArray = numbersAsString.map(Number);

  // even numbers in the array
  for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 === 0){
      process.stdout.write(numArray[i] + ' ');
    }
  }
  console.log('\n');
  // returning the even number from the array
  process.stdout.write('max in the array is: ');

    let max = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    process.stdout.write(max + ' ');

    // const maxNumber = Math.max(...numArray);
    // console.log('Maximum number:', maxNumber);

  rl.close();
});