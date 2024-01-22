// If Statement
const isUserLoggerIn = true
const temperature = 41
// if (temperature === 41) {
//     console.log("Less than 50");
// } else {
//     console.log("temperature is greater then 50");
// }

const score = 200
// if(score > 100){
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //Error

// const balance = 1000
// if(balance > 500) console.log("Test"),console.log("Test2");; //Implicit scope for only one line and can be for multiple line too.

// if (balance < 500) {
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =  false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allowed to logIn");
}
