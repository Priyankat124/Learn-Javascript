/* let myname = "Priyanka   ";
console.log(myname.trueLength); */

let myHeros = ["Shriram","Arjun"]
let heropower = {
   Shriram : "code",
   Arjun : "sketch" 

};
Array.prototype.heyPri = function(){
    console.log("Priyanka says hello dear !");
}
Object.prototype.Priyanka = function (){
    console.log(`Priyanka is present Ubiquitously`);
};
myHeros.Priyanka();
heropower.Priyanka();
myHeros.heyPri();
/* heropower.heyPri();
 */
// inheritance
Object.prototype.heyPria = new function(){
   `Priyanka is a smart and hardworking girl`}
console.log(heropower);
const User = {
    name : "chai",
    email : "chaia@google.com"
}
const Teacher = {
    makevideo:true}
   
const TeachingAssistance = {
    isAvailable: false 
}
const TASupport = {
    makeAssignment : "JS Assignment",
    fulltime:true,
__proto__: TeachingAssistance
    
}
console.log(Teacher.__proto__ = User);
console.log(Teacher);
//modern
Object.setPrototypeOf(Teacher,TASupport)
let anotherusername = "ChaiaurCode"
String.prototype.trueLength = function(){
    
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherusername.trueLength();
"Priyanka".trueLength()
"icetea".trueLength()
