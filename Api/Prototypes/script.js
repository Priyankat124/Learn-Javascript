const newhero = ["hulk","spiderman"];
const hello = {
    name:"Priyanka Tiwari",
    Standard : "Bcom Computer 2nd year"
}
function createUser (username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);

}
const chai = new createUser("chai",25);
const tea = createUser("tea",250);
chai.printMe();
