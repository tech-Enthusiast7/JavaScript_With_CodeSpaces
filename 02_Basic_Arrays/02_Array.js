const marvel_heroes = ["Thor", "Iron Man", "Spider Man"];

const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);

// const all_Heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_Heroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);

// To Array conversion
// console.log(Array.isArray("SunZay"));
// console.log(Array.from("Sunzay"));
// console.log(Array.from({name: "Sunzay"}));  //  Interesting Interview Question


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));


