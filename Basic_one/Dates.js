//Dates
let myDate = new Date();
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleDateString());
 console.log(typeof myDate);

 /* let mycreatedDate = new  Date(2023, 11, 31, 5, 3); */
 /* let mycreatedDate = new  Date("2024-01-9"); */
 let mycreatedDate = new  Date("01-09-2024");

 
 
 /* console.log(mycreatedDate.toLocaleString()); */


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

/* 
let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getMilliseconds());
console.log(newDate.getDay() + 1);

console.log(`${newDate.getDay()} and the month is ${newDate.getMonth()}`
);
console.log(newDate.toLocaleString('default',{
    weekday : "long",
month : "numeric"}));

const myDatetwo = new Date()
console.log(myDatetwo.toDateString());
console.log(myDatetwo.toLocaleString(`default`,{
    month:"narrow",
    weekday:"long"

}));
let mynewDate = new Date()
console.log(mynewDate.toISOString());//2024-01-09T11:35:43.674Z also happens when toJSON 
console.log(toLocaleString()); */


function addUp(num) {
	
	for(let i = 0;i<=num;i++){
		console.log(i++);
        
	};
    
  
};
let num = 10;
for(let i = 0; i<= 10;
    i++){
      console.log( i+= i);


    }
let sum = 0;
    for (let i = 0; i < 10; i++) {  // Loop iterates 10 times
        sum += 1; // Add 1 to the sum (replace with your specific logic for adding el0ements)
      }
      
      console.log("The sum is:", sum);
      
      
    let arr = [0,1,3,4,5,5]
      const array =  arr.slice(0,2);	
        console.log(array);
        function timeForMilkAndCookies(date) {
          const Christmas = date;
          if (date.getMonth() === 11 && date.getDate === 24);
            {
              return (date === timeForMilkAndCookies);
            }
         
            
          };