//{} this is known scope////
//{} inside it is block scope 
//{} outside it is global scope.
//global ke andar jo value ho wo block scope me 
//jaati hai par jo block  ke andar jo value hai wo bahar nhi jaani chahiye.
let a = 40
var b = 50
const c = 60

if (true) {
    let a = 40
    var b = 80

    const c = 70
    console.log(a);
    console.log(b);
}//var not use with loops specially ok.
//This is block scope it returns inside value.
  
console.log(a);//it is global scope it returns outside values.
console.log(b);
console.log(c);
// jab hum node ke andar karte hain to global scope alag hota hai 
// but jab hum inside node karte hain to global scope alag hota hai.

