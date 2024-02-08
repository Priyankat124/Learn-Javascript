function one()
{
    const username = "Priyanka"
    function two(){
        const website = "youtube"
         console.log(username);//closer hota hai jab child parent ke variable access kar paate hain 
    }
   // console.log(website);
    two()
}
one()// ye to run nhi ho sakta kyunki scope to nhi hain naa bahar aa gaya sab kuchh
if(true){
    const username = "Shriram"
    if (username === "Shriram"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);

}
//console.log(username);



// interesting//
//addone(7)
function addone(num){
    return num + 1
}

//addTwo(7)
const addTwo = function(num){//pahale jo kikha hai wo bhi sahi par isko expression bhi kah sakte 

    //hain aur bariable bhi jo value store karke rakhta hai
    return num + 2
}
//to ab aap difference dekh rahe honge pahale me value execute hui 
//doosre type waale me nhi hui to isi ko hoisting ka concept banta hai ki kaise declaration ke pahale executon hota hai aur nhi.


const myArray = [1,3,4,5,6]
console.log(myArray[3]);
myArray.push("these are random numbers")
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.unshift("We are working on arrays")
console.log(myArray);
myArray.shift()
console.log(myArray);
console.log(myArray.includes(5));
console.log(myArray.indexOf(4));
const newArray = myArray.join()
console.log(newArray);

console.log("Pri",myArray);
//const mynarray = myArray.slice(1,4);
//console.log(mynarray);
const mynarray1 =  myArray.splice(1,4);
console.log(mynarray1);
console.log(myArray);

const mynewarryone = ["she is priyanka"];
const mynewarraytwo = ["she is a girl"];
const about_Pri = mynewarryone.concat(mynewarraytwo.concat(mynarray1));
console.log(typeof about_Pri);
console.log(...mynewarryone,...mynewarraytwo);
console.log(Array.isArray(about_Pri));
console.log(Array.from({name: "Pri"}));//interesting
console.log(Array.of(about_Pri,mynarray1));