const myArr = [1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3,4,5)
console.log(typeof myArr);
console.log(typeof myArr2);
console.log(typeof myHeroes);
//console.log("hello i am priyanka");

//Array methods
myArr.push(6)
//console.log(myArr);
/* console.log(myArr.unshift(9)); */
myArr.unshift(9);

//console.log(myArr);
myArr.shift();
//console.log(myArr);
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));
//const newArry = myArr.join()

//console.log(myArr);
//console.log(typeof newArry);
const myn1 = myArr.slice(1,3);
//console.log(myArr);

console.log(myn1);
console.log("B",myArr);


//console.log(myn1);
//console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log("D",myn2);
//We can say that after slice there is no issue on original value but after splice there is issue on original value 
// this is the difference in slice and splice
// slice not include first value and inclue after first value the number which on bracket.
// splice inclue all the value which not in bracket.










