const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const bodyhover = document.querySelector("body");
bodyhover.addEventListener('mouseover',function(hover){
    document.body.style.backgroundColor = "green";
});

/* buttons.forEach(function(button){
   
    button.addEventListener("click",function(eve){
        console.log(eve);
        console.log(eve.target); */

      /*   if(eve.target.id === 'grey'){
            body.style.backgroundColor = eve.target.id;
        } */
    /*     let color = eve.target.id
     switch (color) {
        case "grey":
            console.log(body.style.backgroundColor = "grey");
            
            break;
            
    
     }
 */
  /*    switch (color) {
        case "white":
            console.log(body.style.backgroundColor = "white");
            
            break;
    
     }   */
     
     /* switch (color) {
        case "blue":
            console.log(body.style.backgroundColor = "blue");
            
            break; */
    
       
    /*  switch (color) {
        case "yellow":
            console.log(body.style.backgroundColor = "yellow");
            
            break;
    
     }  */  
   /*   switch (color) {
        case "pink":
            console.log(body.style.backgroundColor = "pink");
            
            break;
    
     }   
     switch (color) {
        case "red":
            console.log(body.style.backgroundColor = "red");
            
            break;
    
     }    
        
    

    })

}); */
buttons.forEach(function(button){
    button.addEventListener("click", function (action) {
        body.style.backgroundColor = action.target.id;
        
    })
})


    
       
 



