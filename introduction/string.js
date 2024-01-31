var intr = "hey, this is \"Akshat\"";
console.log(intr);

// escape character to escape the quotations inside the string 


var str = "first line \\this is a multi line \nsecond line\\ string\t using the escape character";
console.log(str);

var str1 = "hello ";
var str2 = "jennie";
// string concadination
console.log(str1 + str2);
console.log(str1 + " i am having feelings for you " + str2)


var str3 = "hey, ";
console.log(str3 += "how are you"); 

var anAdjective = "Amesome";
var myStr = "these js sample programs are "
console.log(myStr+=anAdjective);

var length = intr.length;
console.log(length);

// indexing
console.log(intr[0]);
console.log(intr[3]);

var str8 = "jello";
str8[0]= "H";
console.log(str8); 
str8 = "hello";
console.log(str8);
/*
    strings are im mutable i.e once created cannot be ultered if does not mean that we can't change the the string its 
    like the individual char cannot be ultered example 
    var str = "jello";
    str[0] = "h";

    results an error while str = "hello "; is fine.
*/

// last letter of the string
var lastLetter = intr[intr.length - 1];
console.log(lastLetter);