 console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 != 1); 
console.log("2" > 1);
console.log("02" > 1);

 console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
                           //avoid these type of comparision
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//Difference between equality(==) and comparision(>=<)exist.Compariosion convert null to a number, treating it as 0;

//=== this is strict check  because it also check value and its datatypes'
console.log("2"=== 2);
console.log(null >= 0);
console.log(null > 0);