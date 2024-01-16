//Singleton jab object constructor se banta hai to singleton banta hai 
//and jab literals se banta hai to singleton nhi banta hai.
//object.create//costructor method

//and jab literals se nama tai to singleton banta hai 
//Literals ke baare me 

//object literals
const mysym = Symbol("key1")
console.log(mysym);//ye to symbole le liya ab key ki tarah define karenge
const JsUser = {
    name: "Priyanka",
    "full_name":"Priyanka Tiwari",

[mysym]:"mykey1",//ye key ki tarah define kar diya
    age:19,
    location : "Indore",
    email: "priyanka.124@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"] 
}

 const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo")
console.log(sym2);
console.log(sym1)
console.log(sym3);//it always gives unique value never intersect one and another//
console.log(JsUser.email);
console.log (JsUser["full_name"]);
console.log( typeof JsUser[mysym]);//ab hum isme string add nhi kar rahe hain so its easy
 

//chages happen in JsUser
 JsUser.email = "priaynakamicrosoft.com"
console.log(JsUser);
Object.freeze(JsUser)
JsUser.name = "Arjun Tiwari"
console.log(JsUser);
 

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//when refer to values always use in objects that is [] and dot but maximum square bracket.
