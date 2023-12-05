//Defino las variables globales
let valorVisor = 0;
let num1;
let num2;
let operacion;

//Funcion principal
function calcular() {
  let total = 0;
  let ultimoTotal = 0;
  switch (operacion) {
    case "+":
      total = Number(num1) + Number(num2);
      break;
    case "-":
      total = Number(num1) - Number(num2);
      break;
    case "/":
      total = Number(num1) / Number(num2);
      break;
    case "*":
      total = Number(num1) * Number(num2);
      break;
  }
  ultimoTotal = total;
  restart(); //Se borra el visor para mostrar el nuevo resultado
  document.getElementById("visor").value = total;
  valorVisor = ultimoTotal;
}

//funcion para capturar los elementos del visor
function boton(opc) {
  let pantalla = document.getElementById("visor").value;
  document.getElementById("visor").value = pantalla + opc;
  valorVisor = document.getElementById("visor").value = pantalla + opc;
}
function btn_igual() {
  num2 = valorVisor;// cuando apreto el igual se guarda la segunda variable
  calcular(); //Llamo a la funcion principal
}

function btn_suma(signo) {
  num1 = valorVisor;
  operacion = "+";
  limpiarVisor();
}

function btn_restar(signo) {
  num1 = valorVisor;
  operacion = "-";
  limpiarVisor();
}

function btn_dividir(signo) {
  num1 = valorVisor;
  operacion = "/";
  limpiarVisor();
}
function btn_multiplicar(signo) {
  num1 = valorVisor;
  operacion = "*";
  limpiarVisor();
}

function restart() {
  document.getElementById("visor").value = "";
  operacion = "";
  valorVisor = 0;
}
function limpiarVisor() {
  document.getElementById("visor").value = "";
}
