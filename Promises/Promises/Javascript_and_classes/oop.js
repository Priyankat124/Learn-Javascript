const user = {
    username:"priyanka",
    liginCOunt : 8,
    signedIn : true,
    /* Above all are properties */
    getPriyankadetails: function(){
        console.log("Got user details");
    }

    /* Funtion is a  method */
}
console.log(user.username);
console.log(user.getPriyankadetails());
 
const details_of_student = [
    {name:"shriram",email:"shriramt.124"},
    {name:"Priyanka Tiwari",email:"PriyankaTI.123"}
]
let additon = details_of_student.map(function(details){
    return "Hello," + details + "!";

});
console.log(additon);

const user2 = {
    username : "Priyanka Tiwari",
    loginCount:9,
    signedIn : true,
    getmore : function(){
   /*  return `Username:${this.username}`; */
   console.log(this);
    }
}
/* console.log(user2.getmore()); */
/* console.log(user2.username);
console.log(user2.getmore()); */
console.log(this);
const stuednt = {
    name:"Roshani",
    Standard:"Bcom 2nd year",
    subject:"commerce",
 getDetails: function(){
    return `student:${this.name}`;
}
}
console.log(stuednt.getDetails());
/* Constructor function */

/* const promiseone  = new Promise (); *///new keyword hai yahi constructor function hai
// new jo hai wo naya contex banane ke kaam aa raha hai and it is a function
function User(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    this.greetings = function(){
       console.log(`Welcome${this.username}`); 
    }

    return this
    
    
}//this is a object

const userOne = new User('Priyanka',12,true);
const Usertwo = new User("Chai aur Code",  12 ,false)
console.log(userOne);// so yahan par new dene se ek naya instance banayenge
console.log(Usertwo);
//new 
//new keyword lagate hi ek naya empty object create hote hai jise instance bola jata hai
// ek constructor function call hota hai new keyword ke karkan aru ye sab kuchh pack karke apan ko de dega
// phir this keyword hain ye sab inject ho jate hain
// fourth me sab nikal ke dikh jaayenge .
//constructor reference hoti hi aap hi ke baare me jo aapne diye hain
