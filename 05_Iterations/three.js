// for of 

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
    
}


const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Nep', "Nepal");
map.set('Fr', "France");
map.set('Fr', "France");

// console.log(map);

for(const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    'Game1': "NFS",
    "Game2": "Spiderman"
}