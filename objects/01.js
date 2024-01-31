const user1 = {
    firstName: 'John',
    gender: 'male',
}


const allUsers = [{
    firstName: "harsh",
    lastName: "sharma",
    age: 19,
    gender: "male"
},{
    firstName: "rahul",
    lastName: "jai",
    age: 22,
    gender: "male"
},{
    firstName: "priti",
    lastName: "shankar",
    age: 20,
    gender: "female"
}]


// accessing the objects
console.log(user1.firstName);

// accessing the elements of the array of objects
for(let i = 0;i<allUsers.length;i++){
    if(allUsers[i]['gender']== 'male'){
        process.stdout.write(allUsers[i].firstName + ' ');
    }
}