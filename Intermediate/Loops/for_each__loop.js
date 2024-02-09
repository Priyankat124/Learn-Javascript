/* const coding = ["js","java","python", "ruby"]
coding.forEach( function(language){
console.log(language);
}) */
const coding = ["js","java","python", "ruby"]
coding.forEach(
(lang)=> {
   console.log(lang);
}
)
function printMe(lang){
    console.log(lang);
}
coding.forEach(printMe);
coding.forEach((lang,index,arr) =>{
    console.log(lang,index,arr);

})
const myCoding = [
    
    {
        langName : "Javascript",
       langFileName: "js"

    },
    {
        langName : "Java",
       langFileName: "java"

    },
    {
        langName : "Python",
       langFileName: "Python"

    },
]
myCoding.forEach( (item)=>{
    console.log(item.langFileName);
})




