function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user ={
    username: "Aum",
    price: 10000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "Aum",
    price: 299
})

const myNewArray = [1,2,3,4,5,6,7,8]

function returnSecondValue(getArray) {
    return  getArray[2]
}
const reson = returnSecondValue(myNewArray)
console.log(reson);