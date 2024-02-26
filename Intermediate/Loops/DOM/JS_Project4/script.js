let randomnumber = (parseInt( Math.random()*100+1)); 
const submit = document.querySelector('#subt') ;
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
console.log(remaining);
const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
 e.preventDefault();
 let guess = parseInt(userinput.value);
 validateGuess(guess)
console.log(guess);

    })

}


function validateGuess(guess){
 //number valid to hain naa.  
 if (isNaN(guess)) {
    alert('Please enter a valid number')

    
 } 
 else if(guess<1){
    alert ('Please enter a number more than 1')
 }else if(guess>100){
    alert ('Please enter a number less than 100')
 }else {
    prevGuess.push(guess)
if (numGuess === 11) {
    displayGuess(guess);
    displayMessage(`Game Over.Random number was ${randomnumber}`);
    endGame();
    

    
}
else {
    displayGuess(guess);
    checkGuess(guess);
}
 }

}


function checkGuess(guess){
if (guess === randomnumber) {
    displayMessage('You guessed it right');
}
 else if (guess < randomnumber) {
    displayMessage('Number is too low');
}

else if
(guess > randomnumber) {
        displayMessage('Number is too high');
    }
}


function displayGuess (guess){
 userinput.value = '';
 guessslot.innerHTML += `${guess}  ` 
 
 numGuess++;  
 remaining.innerHTML = `${11 - numGuess}`

}
console.log(displayGuess);
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id = "newGame">Start new Game</h2>';
  
    startOver.appendChild(p)
    playGame = false;
    newGame();

}
console.log(endGame);

console.log(startOver);
function newGame(){
const newGameButton =  document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
randomnumber =  (parseInt( Math.random()*100+1)); 
prevGuess = [];
numGuess = 1;
guessslot.innerHTML = '';
remaining.innerHTML = `${11 - numGuess}`;
userinput.removeAttribute ('disabled');
startOver.removeChild(p);

    playGame = true;
})
}
console.log(newGame);