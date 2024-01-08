const user = {
    username: "Aum Radia",
    price: 100,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website!`);
        // console.log(this);
    }
}
// This refers current context

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "aum"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "Aum"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Aum"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //Implicit return
// if curly braces then return is necessary as it is Explicit but if implicit then not return.

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Aum"})

console.log(addTwo(3,4))

