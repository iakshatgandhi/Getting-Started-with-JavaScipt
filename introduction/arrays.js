// Declaration
var arr1 = [12, "gorgeous"];


// nested or multi dimensional array
var arr2 = [["baby", 19], ["power", 5]];
console.log(arr2);


var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var myData = myArray[3][0]; //accessing the the values
console.log(myData);


// appending data to an array with the push function
arr1.push("that", ["girl"], ["isn't"]);
console.log(arr1);
arr1.pop();

// also shift deletes the element from the first index
arr1.shift();
console.log(arr1);

// unshift adds in front 
arr1.unshift("not");
console.log(arr1);