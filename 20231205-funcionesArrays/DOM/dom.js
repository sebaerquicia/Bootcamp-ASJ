// Nombre de etiqueta
const parrafos = document.getElementsByTagName("p");
parrafos[0]; //lorem
parrafos[1]; //hola

//name
let elem = document.getElementsByName("edad"); //devuelve coleccion de objetos

elem.value; //obtenemos los ingresado por el usuario
//id
let elem2 = document.getElementById("boton");

//class
let elem3 = document.getElementsByClassName("mensaje");

//QuerySelector
let elem4 = document.querySelector(".mensaje");

//clases = .
//id = #

//EventListener
//Ejercicio
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btn_submit = document.getElementById("enviar");
btn_submit.addEventListener("click", function () {
  let nom = document.getElementById("nom");
  let ape = document.getElementById("ape");
  nom.innerText = nombre.value;
  ape.innerText = apellido.value;
});
