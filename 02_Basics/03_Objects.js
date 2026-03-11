// Singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1");
const JsUser = {
    "full name": "Sun Jay",
    name: "Sunzay",
    age: 18,
    location: "Bhaktapur",
    email: "All@user.com",
    isLoggedIn: false,
    [mySym] : "mykey1",
}

// Accessing the Object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser["mySym"]);

// Modifying Object 

// JsUser.email = "SunUser@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "Sunzay@microsoft.com";
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
