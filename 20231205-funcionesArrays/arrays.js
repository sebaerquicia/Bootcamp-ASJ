//ARRAYS
//Caracteristicas: Son dinamicos, no responden a un tipo de datos (tipado)

let dias = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
dias[3]; //Jueves

//Loops, bucles, ciclos de repeticion

for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}

//dias.length te devuelve la cantidad de elementos que tiene el array

let cont = 0;
while (cont < dias.length) {
  console.log(dias[cont]);
  cont++;
}
//podria poner cont++ dentro del indice y primero mostraria y desp sumaria
let cont2 = 0;
do {
  console.log(dias[cont2]);
  cont2++;
} while (cont2 < dias.length);

//METODOS DE ARRAYS

let arr = [1, 2, 3, 5, 6, 1];

//MAP => devuelve un nuevo array
const map = arr.map((numero) => numero + 1);
console.log(map);

//FILTER => devuelve un nuevo array
const fill = arr.filter((numero) => numero > 3);

//REDUCE
const total = arr.reduce((acc, numero) => {
  acc + numero;
}, 0);
console.log(total);

//SORT => modifica el original
const ordenar = arr.sort((a, b) => a + b);
console.log(ordenar);

//AGREGAR | QUITAR UN ELEMENTO
/* arr.push(6) //al final
arr.pop() //quito el ultimo elemento
arr.unshift(0) //agrego un elemento al principio   
arr.shift() //quito el primer elemento
 */

//SLICE me lo copia literal
const arr2 = arr.slice();

//CONDICIONES
const condicion = arr.includes(1);
//const cond = arr.some(5);

//forEach => modifica el original
const newArr = arr.forEach((numero) => numero * numero);

//INDEX OF
const index = arr.indexOf(3);

// FIND
const condition = arr.find((numero) => numero < 3);

//SPLICE
const chunk = arr.splice(2, 1);
console.log(chunk);

// EJERCICIOS
function fibonacci(nro) {

  const secuencia = [0, 1];
  while (secuencia.length < nro) {
    const numSiguiente = secuencia.slice(-2).reduce((a, b) => a + b);
    secuencia.push(numSiguiente);
  }
  return secuencia;
}

let nro = Number(
  prompt("Ingrese la cantidad de veces que desea repetir Fibonacci")
);
let rdo = fibonacci(nro);
console.log(rdo);
