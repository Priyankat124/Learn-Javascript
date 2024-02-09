//const coding = ["js" , "ruby","java","python","cpp"]



/* const value = coding.forEach( (item)=> {
    console.log(item)//undefine
    return item;//undefine
})
console.log(value); */
//const mynums = [1,2,3,4,5,6,7,8,9,10]
 //const newnums = mynums.filter( (num)=>num >4//we are using condition here
 
//)
//console.log(newnums);
 const mynums = [1,2,3,4,5,6,7,8,9,10]
//const newnums = mynums.filter( (num)=>{
  //  return num >4}///we are using condition here */
 
//)//when we use curly braces at that time we will use return keyword and 
//if we will not use curly braces that is scope at that time output happens directly

const newnums = []

mynums.forEach( (num)=> {
    if (num>4){
newnums.push(num)
    }
})
console.log(newnums);
const movies = [
    {
        title: "Movie1",genre : "Thriller",released:2012,
    },
    {
        title: "Movie2",genre : "Action",released:2013,
    },
    {
        title: "Movie3",genre : "Thriller",released:2017,
    },
    {
        title: "Movie4",genre : "Romantic",released:2016,
    },
    {
        title: "Movie5",genre : "Action",released:2019,
    },
    
];
let usermovies = movies.filter( (mi)=>{
    return mi.released > 2013
    

 }
)
console.log(usermovies);
usermovies = movies.filter( (mi)=>{
    return mi.released >= 2013 && 
    mi.genre === 'Romantic'&& 
    mi.title >= 'Movie2'
})
console.log(usermovies)
