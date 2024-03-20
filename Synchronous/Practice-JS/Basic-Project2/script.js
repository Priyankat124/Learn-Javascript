const passwordBox = document.getElementById('password');

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@!#$%^&*()<>[* :]{}?/=-+";

function createpassword(){
    let password = "";
    password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
 const  allcharcters = Uppercase + lowercase + number + symbol;
 const length = 12;
while (password.length < length){
    password += allcharcters[Math.floor(Math.random() * allcharcters.length)]; 
};

passwordBox.value = password;

};

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}


