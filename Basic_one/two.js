const accountId = 14453
let accountEmail = "preetu.124@gmail.com"
let accountpassword = "12345"
let accountCity = "Indore"

// accountId = 3 not allowed//
console.log(accountId);
accountEmail = "hc@hc.com"
accountpassword = "212134"
accountCity = "Bengluru"
let accountState;

console.table([accountId,accountEmail,accountpassword,accountCity,accountState])

/* prefer not to use var
because of issue in block scope and functional scope */

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`| ${j * i} |`, end = "");
    }
    console.log("\n------");
  }
  for(let k = 1 ; k <= 10; k++){
    for(let l = 1; l<=10; l++){
        console.log(`${k*l}`);
    }
    console.log("");
  }
  