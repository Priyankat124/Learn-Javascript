//for of
// ["","",""]
//[{},{},{}]
const arr = [1,2,3, 4,5 ]
for (const val of arr) {
    console.log(val);
    
}
const wish = " Good afternoon everybody"
for (const wishes of wish) {
   
    console.log(wishes);
  
    
}
const languages = "Html,Css,Javascript"
for(const language of languages)
console.log(language);//for of loop always work in map but not in objects

//Maps
//Always follows order 
//Always have unique values

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA' , "United States of America")
console.log(map);
for (const [key,value] of map) {
    ///.log(key ,':-',value );

    
}
let a = [1,2,3,4,44]

const l = "Html , Css , Javascript"//string 
console.log(l.split(",").join(''));
a.map((ele,index,a)=>{
    //console.log(ele,index,a);
})
const myObject = {
  game1: 'NFS',
  game2 : 'Spiderman'  
}
for (const [key , value] of myObject){
    console.log(key , ':- ',value);//map ko karne ke yahi tarreke hain but  objects ko karne kle alag tareeke ghain
}
