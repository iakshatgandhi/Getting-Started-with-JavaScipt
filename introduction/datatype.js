// Number
var age = 25;

// String
var name = "John Doe";

// Boolean
var isStudent = true;

// Null
var job = null;

// Undefined
var address;

// Object
var person = {
  name: "Jane Smith",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};

// Array
var fruits = ["apple", "banana", "orange"];

// Function
function greet() {
  console.log("Hello, world!");
}

// Symbol
var id = Symbol("id");

// BigInt
var bigNumber = BigInt(123456789);

// Outputting the values to the console
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof job); // "object"
console.log(typeof address); // "undefined"
console.log(typeof person); // "object"
console.log(typeof fruits); // "object"
console.log(typeof greet); // "function"
console.log(typeof id); // "symbol"
console.log(typeof bigNumber); // "bigint"
