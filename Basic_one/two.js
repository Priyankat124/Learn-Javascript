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