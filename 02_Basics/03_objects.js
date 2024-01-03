// Singleton (Constructor)
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aum",
    "full name": "Aum Jayeshbhai Radia",
    [mySym]: "myKey1",
    age: 21,
    location: "Porbandar",
    email : "aum@google.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"]
}
console.log(JsUser.name); // 1st way
console.log(JsUser["email"]); // 2nd way
console.log(JsUser["full name"]); // Example
console.log(JsUser[mySym]);

JsUser.email ="aum@yahoo.in"
// Object.freeze(JsUser); //prevents modification
JsUser.email = "aum@gmail.com"
console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function (){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting2());