const mynumber = [1,2,3,4,5,6,7,8,9,10]

/* const newnums = mynumber.map( (num) => { return num+10

})

console.log(newnums);

let numbu = mynumber.forEach((num) =>{
    console.log(num+24);
    return num+24 
}) */
//CHAINING

const newnumbers = mynumber.map((num) => num*10)
.map((num)=>num+1)
.filter((num)=> num>= 20)//filter return true or false value

console.log(newnumbers);
