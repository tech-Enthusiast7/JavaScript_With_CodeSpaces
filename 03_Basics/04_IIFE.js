// Immediately Invoked Function Expression (IIFE)
/*
    Due to Pollution of Global Scope, to resolve such case IIFE is used
*/


(function chai() {
    console.log("DB CONNECTED");
})();

// chai();

// ()()


// Named IIFE
// (
//     function aurcode() {
//         console.log(`DB CONNECTED TWO`);
//     }
// )();


// Unnamed IIFE
// ((name) => {
//     console.log((`DB CONNECTED ${name}.`));
    
// })("Hitesh");