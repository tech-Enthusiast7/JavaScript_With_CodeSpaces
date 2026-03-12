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

