//Types of datatype i.e. primitive and non-primitive categorisation happens in these category for to reasons that is how  to store data in memory and how to access data;
//Primitive

//7 types : String, Number, Boolean, null, undefined, symbol, BigInt;

//which type of language is javascript : Dynamic language.
const score = 100;
const scoreValue = 100.3;
 
const isLoggedIn = false;//false
const outsideTemp = null;//null
let userEmail;//undefined
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(anotherId === anotherId);

const bigNumber = 334455566676776n;//bigint
console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"]//written all abjects inside it.
let myObj = {
    name : "priyanka",
    age : 19,

}

const myFunction = function(){

    console.log("Hello world");// object function 
}

console.log(myObj);
console.log( typeof outsideTemp  );



//Refernce type or non-primitivetype inka refernce  aapko directly allocate kiya jata hai;

//Array, Objects, Functions //all datatype is function return but only function is object function

//*************************************************** */
//stack (Primitive change happens in copy data), Heap(Non-Primitive i.e. change happens in original data)


let myYoutubename = "priyankadotcom"
let anothername = "myYoutubrname"
anothername = "preetudotname"
console.log(myYoutubename);
console.log(anothername);

let userone = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userone
userTwo.email = "priyanka.123@gmail.com"
userTwo.upi = "user@xyl"
console.log(userone);
console.log(userTwo);


