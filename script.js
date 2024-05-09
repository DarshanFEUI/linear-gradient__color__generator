let myBtn1 = document.querySelector("#my-btn1");
let myBtn2 = document.querySelector("#my-btn2");
let copyCode = document.querySelector(".copy-code");

let rgb1 = "#cae74d";
let rgb2 = "#370ece";


const hexValues = () => {
    let myHexValue = "0123456789abcdef";
    let colors = "#";
    for(let i = 0; i < 6; i++) {
       colors = colors + myHexValue[Math.floor(Math.random() * 16)];
    }
    return colors;
}
const  handleButton1 = () => {
   rgb1 = hexValues(); 
   // console.log(rgb1);
   myBtn1.textContent = rgb1;
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};
const  handleButton2 = () => {
   rgb2 = hexValues(); 
   // console.log(rgb2);
   myBtn2.textContent = rgb2;
   document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;
   copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};

myBtn1.addEventListener('click', handleButton1);
myBtn2.addEventListener('click', handleButton2);

copyCode.addEventListener('click', () => {
   navigator.clipboard.writeText(copyCode.innerHTML);
   alert("Copied");
})
