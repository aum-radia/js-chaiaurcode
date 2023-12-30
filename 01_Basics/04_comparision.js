// console.log("2" > 1); //True
// console.log("02" > 1); //True

console.log(null > 0) // False
console.log(null === 0) // False
console.log(null >= 0) //True

/*The reason is that an equality check == and comparision > <> <= work diffrently
comparision converts null to a number, treating it as 0.
That's why (3)null >= 0 is true and (1)null > 0 is false.
*/

console.log(undefined == 0); //False
console.log(undefined > 0); //False
console.log(undefined < 0); //False
