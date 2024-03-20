const i = 50;
const num1= ()=> {for(let m = 0; m =i ;){
   return m;
}};
console.log(num1());
const j = 50;
const num2= ()=> {for(let n = 0; n = j;){
    return n;

}};
console.log(typeof num2());
console.log(num1()+num2());

 if(num1() === 100 || num2() === 100){
   console.log(true);
}else{
 console.log( num1()+ num2() === 100);

};
const isEqualTo100 = (a,b) => a === 100 || b ===100 || (a +b) === 100;
    console.log(isEqualTo100(50 , 50));

 const filename = (str) => str.slice 
 (str.lastIndexOf('.'));
 console.log(filename('Index.html'));
 console.log(filename('Index.js'));
 const moveCharsForward = (str) =>
 str
 .split('')
 .map(char => String.fromCharCode(char.charCodeAt(0) +1))
 .join('');
 console.log((moveCharsForward('abcde')));
const today = Date.now();
console.log(today);

console.log(Date.now());