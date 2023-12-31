/* Memory in javascript */
// Stack (Primitive)
let myYoutubeName = "aumradiadotcom"
let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);

// Heap (Non-Primitive)

let userOne = {
    email:"user@google.com",
    upi:"user@yblbabababa"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"
console.log(userOne.email, userTwo.email);

