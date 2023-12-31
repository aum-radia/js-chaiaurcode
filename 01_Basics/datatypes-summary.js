// Primitive Datatype //Call By Value
// Total 7 types 
/* 
    String, Number, Boolean, null, undefined, Symbol(To make value unique), BigInt(For Big Values)
*/

// const score = 100 
// JavaScript is a dynamically typed language. 
// This means that variables can hold different types of values at different points in the program's execution.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(id, anotherId);

const bigNumber = 325342346464242452n
console.log(typeof bigNumber);

// Reference Type or Non-Primitive datatype
/*
    Array, Objects, Functions
*/ // Return type of all non-primitive data type is "object"

let heros = ["shaktimaan", "nagraj", "doga"]
let herosObj = {
    name: "Aum",
    age: 23
}
const muFunction = function() {
    console.log("Aum Radia");
}

console.log(typeof heros, herosObj, muFunction);


console.log("*******");

console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug in JavaScript)
console.log(typeof true);        // "boolean"
console.log(typeof 42);           // "number"
console.log(typeof 42n);          // "bigint"
console.log(typeof 'Hello');      // "string"
console.log(typeof Symbol('foo')); // "symbol"

console.log(typeof {});           // "object" (generic object)
console.log(typeof []);           // "object" (array is a special type of object)
console.log(typeof function() {}); // "function"
console.log(typeof new Date());    // "object"
console.log(typeof /regex/);      // "object" (regular expression)
console.log(typeof new Map());     // "object"
console.log(typeof new Set());     // "object"
console.log(typeof new Promise(() => {})); // "object"


