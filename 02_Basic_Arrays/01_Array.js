// Array

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

const heros = ["Iron Man", "Thor", "Captian America"];

const myArr2 = new Array(1, 3, 5, 7);

// Array Methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.unshift(10);
myArr.shift();


myArr.includes(9);
myArr.indexOf(3);

const newArr = myArr.join();

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log("B ", myArr);

console.log(myn1);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);

console.log(myn2);