//how to declare objects with the help of costructor
//how it happens singleton
//const tinderUser = {}//non singleton object hai
const tinderUser = new Object()//singleton object hai
console.log(tinderUser);

tinderUser.id = "01234a"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
const regularUser = {
    email :"some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Priyanka",
            lastname: "Tiwari"
        }

    }



}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}
//const obj3 =Object.assign ({},obj1,obj2)

const obj3 = {...obj1,...obj2}

//console.log(obj3);
const firstname = {1:"Priyanka"}
const lastname = {2:"Tiwari"}
const fullname = Object.assign({},firstname,lastname)
//const fullname = {...firstname,...lastname}

const users = [
    {
        id :1,
        email : "print.124gamil.com",
    },
    {
        id :1,
        email : "print.124gamil.com",
    },
    {
        id :1,
        email : "print.124gamil.com",
    },
    {
        id :1,
        email : "print.124gamil.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/* const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"


}
//console.log(course.courseInstructor */
  /*   ;
    const{courseInstructor:instructor}  = course
console.log(instructor);
const{coursename} = course//this is de-structuring
 console.log(coursename);
 */
 //destructuring means kisi particular data ko nikal lena 

 //jaise ki ek object hai 
 const myobj = {
    name:"shriram tiwari",
    age:18,
    mycourse:"Btech",
    add : function(){
        console.log("this is function");
    }
 }

 //ab hame ye uper wale object se sirf name aur course nikalna hai to ham destructure karenge 
 const {name,mycourse} = myobj;
 console.log(name,mycourse);
 console.log(myobj);
 let obj = {
    myMethod: function() {
      console.log("This is my method!");
    }
  };
  

 
// navbar(company = "Pri");//this is de-structuring 

/* const hisobject = {}
const str  = "hisobject"
const rand = Math.random()
const anotherobject = {}
console.log(hisObj.hisObject); 
 */
/* console.log(typeof hisobject);
console.log(str);
console.log(rand);
console.log(anotherobject);
Object.getOwnPropertyNames(hisobject);
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }; */
/*   


let propertyName = "make";
myCar[propertyName]= "Ford";
propertyName = "model1"
myCar[propertyName] = "Mustang" */;
/* console.log(myCar); */


const Manager = {
    name:"Priyanka",
  age:19.5,
  job: "Front End Development",


};
const Intern = {
    name:"Preetu Tiwari",
    age:19,
    job: "Data Analytics",}
    function sayHi(){
        console.log("Hello, my name is ${Intern.name}")};
    
    console.log(sayHi());




function sayHi(){
    console.log(`Hello, my name is ${this.name}`);

}
/* let  = new sayHi();
obj.sayHi() */
/* const anothercourse = {
    coursename:"JS in hindi",
    amount:"999",
    courseInstructor:"hiteshc"
} */
//course.courseInstructor
const customer = {
    customername : "Shriram Tiwari",
    customernumber : 123467890,
hissubject:"computerscience",
}

const {customername} =  customer
console.log(customername);
//API
/* {
    
    "name":"Arjun",
"coursename":"Neet",
"price":"free"




}
[
    {},
    {},
    {}
] */
//Random userme for API
//then JSON formatter


 function MyObject() {}
MyObject.prototype.myMethod = function() {
  console.log("This is my method!");
};

obj.myMethod(); // Calls the function
function sayHi(){
    console.log("Hello my name is Priyanka Tiwari");
}
console.log(sayHi());