new Promise (function (resolve,reject){
    setTimeout(function(){
        console.log("Async part 1");
        resolve()
    },1000)
}).then(function(){
    console.log("Async part 1 should complete first");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Priyanka is doing her task 1");
        resolve()
    },5000)
  

}).then(function(){
    console.log("Priyanka is doing");
});
const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "priyanka",email: "priyanka.124@"})
   
  })  
})
promiseThree.then(function(user){
    console.log(user);
})
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Priyanka",password:"123"})
           
            }
            else{
                reject('ERROR:Something went wrong')
        }
    },1000)
})
promisefour
.then((user) => {
    console.log(user);
    return user.username  

}).catch(function(error){
    console.log(error);
}).finally(() => 
    console.log(`the promise resolved`))


    const promisefive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error  = true
        if(!error){
            resolve({
                username:"javascript",password: "345"
            })
          
        }
        else 
        reject('Error : js went wrong')
      },1000)  
    });
    
  async function consumepromisefive(){
 try {
    const respose = await promisefive;
    console.log(respose);
 } catch (error) {
    console.log(error);
 }
}
 
 consumepromisefive()

 