// Immediately Invoked Function Expressions(IIFE)

function chai(){
      console.log(`DB Conncted`);
}
/* chai() */
(
    function chaione(){
        console.log(`DB COnnected`);//named iffe hai
    }
)();//IIFFE function jo immediately execute ho jaaye.
//()()
//2. another reason is that global scope ke pollution se bachane ke liye uske declaration bachaane ke liye.
//semi colon is necessary because iife function don;t know where to end context.
((name) =>{
    console.log(`DB Connected two${name}`);//if i want one variable also
})
(`priyanka`);//simple iffe
(
    () => {
        console.log('DB connected');
    })();

((num)=>{
        console.log(`DB Connected two${num}`)
})(55);
        ;//if i want one variable also
//simple iffe
/* function one (){
    const username = "shriram"
  

function two (){
    const anothername = "priaynaka"
    console.log(username);
    


}
two()
 */

/* 
}
one() */
function four(){
   const Username = "priyanka"
   console.log(Username);
    function five(){
       const anothername = "arjun"
        console.log(Username);
       }
  //five()     

}
//four();

(
    (classes) => {
        console.log("hello everybody"+ classes);

    }

)("second");






