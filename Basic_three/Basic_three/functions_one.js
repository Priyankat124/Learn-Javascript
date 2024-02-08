//function means aapne poore code (jitni bhi lines ka ho) ko ek package me band kar dete hain and hum jitin baar chaahen utni baar uski copies bhi kahin bhi le ja sakte hain.
// console.log("hi");
// console.log("hello");
// console.log("hyy");
// console.log("hee");
// console.log("Happy");


// function sayMyName(){
// console.log("hi");
// console.log("hello");
// console.log("hyy");
// console.log("hee");
// console.log("Happy");

// }
//it is reference of function definition//sayMyName
//() it is excecution of function//
//sayMyName()

/* function addTwoNumbers(number1,number2){
    console.log(number1 + number2); */
//}
//addTwoNumbers(4,5)
//number1 and number2 these are argument and in execution() we are giving values and then get ouutput.//
//Parameters are those when we give values inside of function definition
//arguments when we call the value for execution.
function addTwonumbers(number1,number2){
   // let result = number1 + number2
    //return result // after return given the execution never happens if you write anything.


return number1 + number2
}
console.log(typeof addTwonumbers);
const result = addTwonumbers(3,5)
console.log("Result ", result);
console.log(typeof result);
// after above execution we get the value undefine so, function doesnot mean return the value but type is also correctv that is ki aapne fucntion kya waapas 
//bheja sahi hona.
//return process ke baad hi aap kisi variable me lock kar sakte hain nhi to nhi

function loginUserMessage(username = "Jennifer"){
    //if(username === undefined)//this is other way of writing.
    if(!username){
        console.log("Please enter a username");
//return// not execute other below code
    }
    return `${username} just logged in`


}
console.log(loginUserMessage("priyanka"));
console.log( "result ",loginUserMessage("priyanka"));

console.log(loginUserMessage("Priyanka"));//it gives undefine result.So, it means not define value.So. we
//give if / else statement.
//! this symbols convert true to false aur false to true.

function calculateCartPrice(val1,val2,...num1){
    return num1 // val1 and val2 le gaya suru ki values baaki ki rest me chali gayin.

}
console.log(calculateCartPrice (200, 400, 500,2000));//here we use rest operator or spread operator  to take full value in return.


const user = {
    username: "Priyanka",
    prices:200
}
//function handleObject (anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
//}
const student = {
    studentname:"Shriram Tiwari",
     studentclass:"BtechCS"

}
function handleObject (anyobject){
    console.log(`student is${anyobject.studentname} and class is ${anyobject.studentclass}`);
}
handleObject(student);//if we write code in professional way then first check type of that object.

handleObject({
    username:"sam",
    price:455
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){//function accept array and give secondvalue.
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray));

//how to create a function 

//function
const myoldArray = [200,400,600,800]
function returnThirdValue(getmyArray){
return getmyArray[3]}
console.log(returnThirdValue(myoldArray));

