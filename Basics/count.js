const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for information
rl.question("n = ",function(inputNumber){
    const n = parseInt(inputNumber);
    //The parseInt method parses a value as a string and returns the first integer.
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log("Sum = " + sum);
rl.close();
});