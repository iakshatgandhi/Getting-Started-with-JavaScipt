let personsArray = ['harshit', 'rishab', 'priya'];
let genderArray = ['male', 'male', 'female'];

for(let i = 0; i < personsArray.length; i++){
    if(genderArray[i]==='male'){
        process.stdout.write(personsArray[i] + " ");
    }
}