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
//Maps
//Always follows order 
//Always have unique values

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA' , "United States of America")
console.log(map);
