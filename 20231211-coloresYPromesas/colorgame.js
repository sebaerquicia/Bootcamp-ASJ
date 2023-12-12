/* let colors = [
  "rgb(255, 87, 51)",
  "rgb(243, 255, 0)",
  "rgb(98, 124, 255)",
  "rgb(255, 82, 242)",
  "rgb(51, 180, 47)",
  "rgb(162, 55, 231)",
];
 */
let colors = new Array(6);
const colorDisplay = document.getElementById("colorDisplay");
const cuadrados = document.querySelectorAll(".square");
const spanMsg = document.getElementById("message");
const reset = document.getElementById("reset");
const h1 = document.getElementById("h1");
let colorsRGB = [];

let pickedColor = colors[Math.floor(Math.random() * colors.length)];
                
let clickedColor;

colorDisplay.innerText = pickedColor;
function principal() {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].setAttribute("id", colors[i]);
    cuadrados[i].setAttribute("onclick", `cambiarColor(${i})`);
    cuadrados[i].setAttribute("style", `background-color:${colors[i]}`);
  }
}

function cambiarColor(i) {
  if (cuadrados[i].id == pickedColor) {
    spanMsg.innerText = "Correcto!";
    cuadrados.forEach((cuadrado) => {
      cuadrado.style = `background-color:${pickedColor}`;
      h1.style = `background-color:${pickedColor}`;
    });
  } else {
    cuadrados[i].style = `background-color:#232323`;
    spanMsg.innerText = "try Again";
  }
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
                           
function generateRandomColors() {
  for (i = 0; i < cuadrados.length; i++) {
    colorsRGB.push(randomColor());
    colors = colorsRGB;
  }
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.innerText = pickedColor;
}

function resetGame() {
  colorsRGB = [];
  spanMsg.innerText = "";
  h1.style = `background-color: #232323`;
  generateRandomColors();
  principal();
}
resetGame();
principal();


/* let colors = []

const colorDisplay = document.getElementById("colorDisplay");
const cuadrados = document.querySelectorAll(".square");
const spanMsg = document.getElementById("message");
const reset = document.getElementById("reset")
const h1 = document.getElementById("h1");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
let pickedColor;
let colorsRGB =[]
let clickedColor 

colorDisplay.innerText = pickedColor;

easy.addEventListener("click", ()=>{
    principal(3);
});

hard.addEventListener("click", ()=>{
    principal(6);
});
function principal(modo){

    generateRandomColors(modo);
    for(let i = 0; i<modo; i++){
        cuadrados[i].setAttribute("id", colors[i]);
        cuadrados[i].setAttribute("onclick", `cambiarColor(${i})`);
        cuadrados[i].setAttribute("style", `background-color:${colors[i]}`);
        if(modo === 3){
            cuadrados[i+3].style.display = "none";
            easy.setAttribute("class", "selected");
            hard.removeAttribute("class", "selected");
        }
        
    }
    
}

function cambiarColor(i){
    if(cuadrados[i].id == pickedColor){
        spanMsg.innerText = "Correcto!";
        cuadrados.forEach(cuadrado => {
            cuadrado.style = `background-color:${pickedColor}`
            h1.style = `background-color:${pickedColor}`
            
           
        });

    }else{
        cuadrados[i].style = `background-color:#232323`;
        spanMsg.innerText = "try Again";

    }
    
}

function randomColor(){
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}


function generateRandomColors(cantidad){
    for(i=0; i < cantidad; i++){
        colors.push(randomColor())
        
  
    }
    pickedColor = colors[(Math.floor(Math.random() * cantidad)) ];
    colorDisplay.innerText = pickedColor;
}

function resetGame(){
    colorsRGB=[]
    spanMsg.innerText = "";
    h1.style = `background-color: #232323`
    
    principal(6)
}

document.body.onload = (principal(6));
reset.addEventListener("click", ()=>resetGame()); */