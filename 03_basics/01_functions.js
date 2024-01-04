function sayMyName() {
    console.log("Hello Bhai");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
// const result = addTwoNumbers(2,6)
// console.log(result);

function logInUserMessage(username = "Sam") {
    if (username == undefined || username === null) {
        console.log(`Please enter a username`);
        return
    }
    return `${username} Just Logged In`
}
const result = logInUserMessage("Aum Radia")
console.log(result);