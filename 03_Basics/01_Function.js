function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName
// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    
}

// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    
}

// console.log("Result: ", result);

function loginUserMessage(username = "User") {

    if(!username) {
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`;
}

// loginUserMessage("hitesh");
// console.log(loginUserMessage(""));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is {anyobject.price}`);
    
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 300
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 200, 600]));
