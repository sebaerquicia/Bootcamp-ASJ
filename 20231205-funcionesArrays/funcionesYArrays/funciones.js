//Funciones

//Declaracion
function nombre_apellido(nombre, apellido) {
  //codigo de la funcion
  let nombre_completo = nombre + " " + apellido;
  return "Hola";
}

//Ejecutar o instanciar
nombre_apellido("Sebastian", "Erquicia");

//Funciones por expresion, se guarda en una variable
let miFuncion = function suma() {
  let a = 10;
  let b = 20;
  return a + b;
};

//miFuncion();

//Arrow function: var = () => {}
const saludo = () => {
  console.log("Hola mundo");
};

//si tiene una linea en el cuerpo de la funcion, puedo NO poner el return ni las llaves {}
const saludo2 = () => "Hola mundo"

// si tengo un solo parametro puedo obviar los parentesis
const saludo3 = texto => texto+ "Hola mundo"

//pasamos parametros
const funcion = (a,b,c) => a + b +c;

