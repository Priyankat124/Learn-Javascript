// this tells about current context means it refer to current context
//arrow function//
//user register kar raha hai to ek object banate hain
// so,
//this is ${}variable
//browser ke andar jo global object hai wo window object hai.
const user = {
    username :"Priyanka Tiwari",
    price : 2000,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    +console.log(this);
    
    }



}
user.welcomeMessage()
user.username = "Shriram"
user.welcomeMessage()

console.log(this);

//function chai(){
    let studentname = "Arjun"
//  console.log(this.studentname);  
//}
const chai = function (){
    let classname = "Preetu"
    console.log(this.classname);
}
chai()

//chai()//means this is use only in object not use in function.
//ab arrow function ki baat karte hain to wo bas aisa dikhata hai
//actually function me this ka use  nhi hota chahe arrow ho chaahe normal
const Chai = () => {
    let username = "Freedom"
    console.log(this.username);
}
Chai()

//Proper Arrow Function\\
//basic syntax \\ () => {}
//we can add this syntax under some name\\
/* const addTwo = (num1 , num2) =>{
return num1 + num2//explicit return
}
addTwo(3,4)
console.log(addTwo(3,4)); */
// now we will declare function in other way:
//we call it implicit return it means maine maan liya ki aapko likhne jayada jaroorat nhi hai kynki aapka ek hi line ka statement hai\\
const addTwo = (num1 , num2) => num1 + num2
  console.log(addTwo(4,7));  
//in otherway we can also write\\
//const addTwo = (num1, num2) => (num1 + num2 )//jab aap parentesis ke andar likhenge to aapko return likhne ki jaroorrat nhi hai but jab curly braces to return likhne lki jarrorat padti hai\\
console.log(addTwo(5,7));
// parenthesis important isliye hai kyunki hum sirf curly braces me ham object define karenge to undefine ho jaayegi value so parenthesis ke andar value store karna jata hai.
const addname = (num3, num4 ) => ({username : "Priyanaki" })
 console.log(addname(3,4));
 const userthree = {
    username : "Priyanka",
    price: 112,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);

    
    }
    

    
 } 
 userthree.welcomeMessage()

 const coffee = ()=>{
    let username = "Pri"
    console.log(this);

 }
 coffee()

 /* () => {} */
const addnext = (num1, num2)=>{

    return num1+num2
}
console.log(addnext(2, 5));
console.log(addnext(4,6))

const multiplyfour = (num1, num2, num3, num4) =>(num1*num2*num3*num4)

console.log(multiplyfour(2, 3, 4, 5));
 

const again = (num3, num4) => (num3/num4)
console.log(again(10, 2));