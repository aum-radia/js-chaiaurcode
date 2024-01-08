// Immediately Invoked Function Expressions (IIFE)

//Global scope ke pollution se problem hoti hai kahi baar so global scope ke variable hai ya jo bhi declaration hai unke pollution ko hatane keliye IIFE is important

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

// ()() //second parenthesis is execution call and first parenthesis for function defination
// ; we have to end it as well , to end context. semicolon is important
((name) => {
    //Unnamed IIFE
    console.log(`DB CONNECTED ${name}`);
})('Aum'); // Parameters
