const myObject = {
    js: 'Jacascript',
    cpp: 'C++',
    rb: 'swift by apple'
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(programming[key]);
    
}
const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA' , "United States of America")
for(const key in map){
   // console.log(map[key]);//output nhi aayega kyunki ye itertable nhi hai
}
// object ke uper loop lagana ho to for in loop agar  arrays ke uper lagana ho to for of loop