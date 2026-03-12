const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "hitesh";
//     console.log(this);
//     console.log(this.username);
// }
// chai();


// const chai = function () {
//     let username = "hitesh";
//     console.log(this);
//     console.log(this.username);
// }
// chai();


// const chai =  () => {
//     let username = "hitesh";
//     console.log(this);
//     console.log(this.username);
// }
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// Same to Implicit Return
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({username: "hitesh"});


