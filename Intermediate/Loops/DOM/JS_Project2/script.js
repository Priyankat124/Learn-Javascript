const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if (height === '' || height < 0 || isNaN(height)){
results.innerHTML = `Please give a valid height ${height}`;
}else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
    }
    else{
  const bmi = (weight/(height*height/10000)).toFixed(2)
  console.log(bmi);
    
results.innerHTML = `<span>${bmi}</span>`; 
  const note = document.querySelector('#note');
         if (bmi < 18.5) {
            note.innerHTML = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            note.innerHTML = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            note.innerHTML = 'Overweight';
        } else{
           document.note.innerHTML = 'Obese';
        }
    }
 



});
