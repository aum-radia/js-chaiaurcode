// Dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 0, 1)
// let myCreatedDate = new Date(2024, 0, 1, 5 , 3)
// let myCreatedDate = new Date("2024-01-01")
let myCreatedDate = new Date("01-01-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
let current = myTimeStamp - myCreatedDate.getTime()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());

console.log(newDate.toLocaleString());
