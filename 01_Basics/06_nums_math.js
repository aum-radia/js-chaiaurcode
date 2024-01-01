const score = 400
// console.log(score);

const balance =  new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

// ********** Maths **********
// console.log(Math);
// console.log(Math.abs(-4)); //absolute
// console.log(Math.round(4.6)) //round of the number
// console.log((Math.ceil(4.2))); //Always round to upper value
// console.log(Math.floor(4.3)); //Always round to lower value
// console.log(Math.sqrt(5)); //Square Root of the number
// console.log(Math.min(4,3,2,5,6)) //Minimum Number
// console.log(Math.max(2,5,7,9)); //Maximum Number

console.log(Math.random());
console.log(Math.floor(Math.random()*10 + 1));


const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min + 1))) + min);