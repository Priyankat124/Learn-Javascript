const Upperset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Lowerset = 'abcdefghijklmnopqrstuvwxyz';
const Numberset = '1234567890';
const Symbolset = '@*&^%$#!+_=/';

const totalchar = document.getElementById('total-character');
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbol");
const passwordBox = document.getElementById("password-box")
const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)]

};

const generatepassword = (password = "")=>{
    if (upperinput.checked){
        password += getrandomdata(Upperset);


    };


    
        if (lowerinput.checked){
            password += getrandomdata(Lowerset);
    
    
        };
    
            if (numberinput.checked){
                password += getrandomdata(Numberset);
        
        
            };
                if (symbolinput.checked){
                    password += getrandomdata(Symbolset);
            
                };
                if(password.length < totalchar.value){
                    return generatepassword(password);
                }
    passwordBox.innerText = (truncateString(password,totalchar.value));
            };
            generatepassword();
document.querySelector("button").addEventListener("click",function(){
    generatepassword();
}


);
function truncateString(str,num){
    if (str.length = num){
        let substr = str.substring(0,num);
        return substr;
    }else {
        return str;
    }
}
