const userEmail = [] //True not, "" False, [] //True value
// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} (Empty Function as truthy values)

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// false == 0
// ->true
// false == ''
// ->true
// 0 == ''
// ->true

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}

// Nulish Coalenscing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //5

// val1 = null ?? 10 //10

// val1 = undefined ?? 15 //15

// val1 = null ?? 10 ?? 20 //10
console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");
