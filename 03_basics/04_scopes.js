// Nested Scopes

function one(){
    const username = "Aum Radia"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
// one()

if (true) {
    const username = "Aum Radia"
    if (username === "Aum Radia") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// =========Interesting==========
console.log();
function addone(num) {
    return num + 1
}

addTwo(5)
const addTwo = function(nums) {
    return nums + 2
}
