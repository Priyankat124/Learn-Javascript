function Setusername(username){
    //this complex calculation
    this.username = username

   
}
function CreateUser(username , email , password){
   
   
   Setusername.call(this,username);

    this.email = email
    this.password = password




}
const chai = new CreateUser ("chai" , "chai@gppgle.com" , "123")

console.log(chai);
