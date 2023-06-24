function testStrict(val){
    if(val === 7){
        return "equal";
    }
    return "Not Equal";
}

console.log(testStrict("7"));


// there is also a strict equality operator
// a === b

// in this 3 === "3"; is false i.e same value with diff data type 
// while this is true with ==

