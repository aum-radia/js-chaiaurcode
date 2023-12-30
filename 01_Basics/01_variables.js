// Ways to declare variable
const accountId = 144234
let accountEmail = "aumradia1231@gmail.com"
var accountPassword = "12345"
accountCity = "Porbandar"
let accountState;

// accountId = 2 // Not Allowed Because it is constant once declared cannot be changed
accountEmail = "Hc@verma.com"
accountPassword = "223"
accountCity = "Pbr"

// console.log(accountId);

/*
Perfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountCity,accountEmail,accountId,accountPassword,accountState])
