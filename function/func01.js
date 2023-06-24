function nextInLine(arr, item){
    arr.push(item)
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


// The unshift() method inserts the given values to the beginning of an array-like object

// Shift is an inbuilt Array method that removes the first element from an array and returns the removed element