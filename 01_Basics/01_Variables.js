const accountId = 144553;
let accountEmail = "sunzay@google.com";
var accountPassword = "12345";
accountCity = "Bhaktapur";
let accountState;

// accountId = 2;   // Not Allowed

accountEmail = "SunXZay@gmail.com";
accountPassword = "2121212344";
accountCity = "Lalitpur";

console.log(accountId);

/*
    Prefer not to use var 
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
