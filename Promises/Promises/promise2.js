const promiseOne = new Promise(function(resolve,reject){
 
 //Do an async task
 //DB Calls , cryptography ,network
 // all it takes time to work 
    setTimeout(function(){
console.log("Aync task is complete");
     resolve();   
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
});
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
});
const Promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Priyanka" , email: "priyanka.123"})
     
    },1000)
});
Promisethree.then(function(priyanka){
    console.log(priyanka);
});
const Promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(!error){
        resolve({username:"Preetu" , password:"preet.1234"

        })

        }else{
            reject("error! something is wrong")
        }
       }
    ,1000)
})
Promisefour
.then((user)=>{
    console.log(user);
    return user.username

})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Finally the promise either resolved or rejected"));


const promisefive  = new Promise((resolve,reject)=>{
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"Shriram",email:"shriramt.1234"})
    }else {
        reject("error")
    }
},1000)
});

async function consumepromisefive(){
  try {
    const response = await promisefive
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}
consumepromisefive();

/* async function getAllusers(){
       
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      console.log(data);
      
    

}
catch (error) {
    console.log("error is happening",error);

}
}


getAllusers();
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log(error));


