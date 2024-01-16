const marvel_heroes = ["thor", "Ironman" , "Spiderman","Blackwidow"];
const dc_heroes = ["superman","flash","batman"];

//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);
//marvel_heroes.concat(dc_heroes);
//console.log(marvel_heroes);
//const allHeroes = marvel_heroes.concat(dc_heroes);//its important to hold previous elenmnet with new name;

//console.log(allHeroes);
const allnewheroes = [...marvel_heroes,...dc_heroes]
//console.log(allnewheroes);

const anoter_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anoter_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("Priyanka"));
console.log(Array.from("Priyanka"));

console.log(Array.from({name : "Priyanka"}));//not able to convert into array directly

//string come in this bracket() , array [],object comes in {}
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3));

//() this bracket is called parentheses,[] this bracket is called square bracket,{} this bracket is called curly braces.