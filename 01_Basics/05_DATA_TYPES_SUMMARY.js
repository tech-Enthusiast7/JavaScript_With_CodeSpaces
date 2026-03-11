// Primitive


/*
    7 types: String, Number, Booelan, null, undefined, Symbol, BigInt
*/
const score = 100;
const scorevlaue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id ===  anotherId);


const bigNumber = 34343785387538753n


// Reference (Non Primitive)

/*
    Array, Object, Functions
*/

const heros = ["Captain America", "Ironman", "Hulk", "Thor"];

let myObj = {
    name : "Sunjay",
    age : 22,
}

const myFunction = function() {
    console.log("HelloWorld");
    
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
