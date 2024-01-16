const name = "Priyanka"
const surName = "Tiwari"
console.log(name + surName + " is great");

console.log(`Hello my name is ${name} and my surName is ${surName}`);


// `` this sign is backticks

const gameName = new String('Priyankati');

console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
const catName = new String('Catie-Cat-Name');
 console.log(catName[2]);
  console.log(catName.charAt(3));

 console.log(catName.indexOf('t'));
const newString = catName.substring(0,4);//not give negative values;
console.log(newString);

const anotherString = catName.slice(-2,4);
console.log(anotherString);

const newStringOne = " Arjun "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/myname30%priyanka"

console.log(url);
console.log(url.replace('30%','-'));
console.log(url.includes('google'));
console.log(url.includes('Microsoft'));
console.log(catName.split('-'));



/*  */
/* const url ="https://google.com/myname30%priyanka"


console.log(url);
console.log(url.replace('30%','-'));
console.log(url.includes('google'));
console.log(url.includes('Microsoft'));
console.log(catName.split('-'));


 */