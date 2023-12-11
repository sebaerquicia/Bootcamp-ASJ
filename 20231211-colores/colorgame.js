let colors = ["rgb(255, 87, 51)","rgb(243, 255, 0)", "rgb(98, 124, 255)","rgb(255, 82, 242)", "rgb(51, 180, 47)", "rgb(162, 55, 231)"];

const colorDisplay = document.getElementById("colorDisplay");
const cuadrados = document.querySelectorAll(".square");
const spanMsg = document.getElementById("message");
const reset = document.getElementById("reset")
const h1 = document.getElementById("h1");
let pickedColor = colors[2];
let colorsRGB =[]
let clickedColor 

colorDisplay.innerText = pickedColor;
function principal(){

    for(let i = 0; i<cuadrados.length; i++){
        cuadrados[i].setAttribute("id", colors[i]);
        cuadrados[i].setAttribute("onclick", `cambiarColor(${i})`);
        cuadrados[i].setAttribute("style", `background-color:${colors[i]}`);
        
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


function generateRandomColors(){
    for(i=0; i < cuadrados.length; i++){
        colorsRGB.push(randomColor())
        colors = colorsRGB
  
    }
    pickedColor = colors[(Math.floor(Math.random() * colors.length))]
    colorDisplay.innerText = pickedColor;
}

function resetGame(){
    colorsRGB=[]
    spanMsg.innerText = "";
    h1.style = `background-color: #232323`
    generateRandomColors()
    principal()
}
principal()