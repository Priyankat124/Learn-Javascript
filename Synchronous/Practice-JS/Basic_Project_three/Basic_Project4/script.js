const getcolor = ()=>{
    const randomnumber = Math.floor(Math.random()*1677215);
console.log(randomnumber);

const randomcode = '#'+ randomnumber.toString(16);
console.log(randomnumber ,randomcode);
document.body.style.backgroundColor = randomcode;
document.getElementById('color-code').innerText = randomcode;
navigator.clipboard.writeText(randomcode);
}
// this is below is a event call
const clickbutton = document.querySelector('.btn').addEventListener("click",getcolor);
//this is initial  call jo page kholte hi rahega
getcolor();

