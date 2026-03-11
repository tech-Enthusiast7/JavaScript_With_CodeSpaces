let score = "33";

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);

score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = null;
console.log(typeof score);
console.log(score);

score = undefined;
console.log(typeof score);
console.log(score);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0


let isLoggedIn = 1;
isLoggedIn = "";
isLoggedIn = "some";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "some" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************** Operations ******************************
let value = 3;
let negValue = -value;
console.log(negValue);


let str1 = "Sun";
let str2 = "Zay";
let str3 = str1 + str2;
console.log(str3);

console.log("1"  + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");




