function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}


function sumofSomthing(x, y, callback) {
    return callback(x) + callback(y);
}

console.log(sumofSomthing(2, 3, square));
console.log(sumofSomthing(2, 3, cube));


//this is the very basic example of function callback


/*

if thats not the case what we had to do is 

function sumofsquare(x,y){
    return square(x)+square(y);
}
function sumofcube(x,y){
    return cube(x)+cube(y);
}

had to the separate separate function for each operation

*/