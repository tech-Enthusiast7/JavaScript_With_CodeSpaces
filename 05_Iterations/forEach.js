const coding = ["js", "ruby", "java", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })



// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});