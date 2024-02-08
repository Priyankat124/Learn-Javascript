const Useremail = ""
if(Useremail){
    console.log("Useremail get");
}else{
    console.log("not useremail");
}
//falsy values
// false , 0 , -0 , BigInt 0n , "" ,null , undefine,NaN
//Truthy Values 
//"0" , "false" , " ",[],{},function(){},
if(Useremail.length===0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj.length === 0)){

console.log("Object is empty");
}
// notice
/* false == 0
true
false == ""
true == ""
0 == ""
true
true */
//Nullish Coalscing Operator(??): null undefined
let val1;
//val1 = 5 ?? 10
//console.log(val1);
//val1 = null ?? 10
//console.log(val1);
//val1 = undefined ?? 6

//console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);
 // Terniary Operator
 // condition ? true ? false
 const iceTeaPrice = 100
 iceTeaPrice <= 90 ? console.log("less than 90") : console.log("more than 80");