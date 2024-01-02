const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros[3][1]);

// const newArr = marvelHeros.concat(dcHeros)
// console.log(newArr);

const all_new_heros = [...marvelHeros, ...dcHeros] //Spread Operator
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Aum"))
console.log(Array.from("Aum"))
console.log(Array.from({name: "Aum"})) // Interesting (We have to say that we want to make array of key's or values)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
