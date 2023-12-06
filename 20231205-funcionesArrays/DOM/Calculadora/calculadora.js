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

//Funcion para capturar los elementos del visor
function boton(opc) {
  let pantalla = document.getElementById("visor").value;
  document.getElementById("visor").value = pantalla + opc;
  valorVisor = document.getElementById("visor").value = pantalla + opc;
}

//Funcion para guardar la variable y llamar a la funcion principal
function btn_igual() {
  num2 = valorVisor; //Cuando apreto el igual se guarda la segunda variable
  calcular(); //Llamo a la funcion principal
}

//Funciones de los operadores
function btn_suma() {
  num1 = valorVisor;
  operacion = "+";
  limpiarVisor();
}

function btn_restar() {
  num1 = valorVisor;
  operacion = "-";
  limpiarVisor();
}

function btn_dividir() {
  num1 = valorVisor;
  operacion = "/";
  limpiarVisor();
}
function btn_multiplicar() {
  num1 = valorVisor;
  operacion = "*";
  limpiarVisor();
}

//Funcion de reseteo
function restart() {
  document.getElementById("visor").value = "";
  operacion = "";
  valorVisor = 0;
}

//Limpia el visor una vez capturado el elemento
function limpiarVisor() {
  document.getElementById("visor").value = "";
}

/* Como funciona?
1. Apreto un numero y con la funcion boton paso el value del boton al visor
2. Cuando apreto un operador se guarda el valor del visor en la variable num1, se pasa el valor de la operacion a la variable operacion y se borra el visor con limpiarVisor
3. Cuando apreto el igual se cambia el valor del num2 y llamo a la funcion calcular
4. Dependiendo del valor de operacion elige en un switch la op a realizar
5. Se resetea el visor e imprime el valor de la operacion
6. En cualquier momento puedo resetear el visor con el boton C*/
