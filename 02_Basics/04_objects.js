// single ton or constructor

const tinderUser = new Object()
tinderUser.id = "123ABC"
tinderUser.name = "Aum"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "aum@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Aum",
            lastName: "Radia"
        }
    }
}
// console.log(regularUser.fullname.userFullName["firstName"]);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 2,
        email:"b@gmail.com"
    },
    {
        id: 3,
        email:"c@gmail.com"
    },

]

users[1].email
console.log(tinderUser);

console.log(Object.values(tinderUser)); // returns in array Object.keys and Object.values
console.log(Object.entries(tinderUser)); //each value to sub array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));