let score = "12a" //Number

console.log(typeof (score));
console.log(typeof score);

let valueNumber = Number(score)

console.log(typeof valueNumber);
console.log(valueNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; fa;se => 0

let isLoggedIn = "aum"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "Aum" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)