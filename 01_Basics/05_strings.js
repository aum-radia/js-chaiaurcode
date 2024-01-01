const name = "Aum"
const repoCount = 1

// console.log(name + repoCount + " Value"); Outdated string concatination

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //String interpolation

const gameName = new String('aum-AR')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('R'));

// const newString = gameName.substring(0, 3)
// console.log(newString);

const anotherString  = gameName.slice(-6, -3)
console.log(anotherString); //aum

const newStringOne = "  Aum  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aumradia.com/aum%20radia"
console.log(url.replace('%20', '-'));
console.log(url)

console.log(url.includes('aumradia')); 

console.log(gameName.split("-"));
