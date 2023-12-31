// Llama a una funcion

/* principal1(); */

// Actividad 1
function principal1() {
  function act1() {
    let texto = prompt("Ingrese un texto");
    return texto;
  }
  let respuesta = act1();
  console.log(`Su texto tiene ${respuesta.length} caracteres`);
}

// Actividad 2
function principal2() {
  const dias = 365;
  function act2() {
    let edad = parseInt(prompt("Ingrese su edad"));
    return edad;
  }
  let resultado = act2();
  alert(`Su edad corresponde a ${resultado * dias} dias`);
}

// Actividad 3
function principal3() {
  let num1, num2, resultado;
  function act3() {
    num1 = Number(prompt("1er numero a sumar:"));
    num2 = Number(prompt("2do numero a sumar:"));
    let suma = num1 + num2;
    return suma;
  }
  resultado = act3();
  alert("El resultado de la suma es " + resultado);
}

// Actividad 4 SNACKS
// Ejercicio 1
function principalSnacks() {
  const snack = "Doritos";
  const precioUnidad = 15;
  const dias = 365;
  function calculadoraSnacks() {
    let edad = Number(prompt("Ingrese su edad"));
    let edadEstimada = Number(prompt("Ingrese su edad estimada de vida"));
    let cantidadSnacks = Number(
      prompt("Cantidad de snacks estimada que vas a comer por dia")
    );
    let calculadora = (edadEstimada - edad) * dias * cantidadSnacks;
    return calculadora;
  }
  let calc = calculadoraSnacks();
  alert(
    `Vas a consumir ${calc} en ${snack} y podes llegar a gastar $${
      calc * precioUnidad
    } suponiendo que no existe la inflacion`
  );
}

// Ejercicio 2 Vacaciones
function principalVacaciones() {
  const cantidadComidas = 2;
  let dias = Number(prompt("Cuantos días te vas de vacaciones?"));
  let presu = Number(prompt("Con qué presupuesto contás?"));
  let comida;
  function calculadora() {
    comida = presu / (dias * cantidadComidas);
    return comida;
  }
  let total = calculadora();
  alert(
    `Podés gastar $${total} en cada comida para que te alcance la plata durante los ${dias} días de viaje`
  );
}

// Ejercios ES6
// 1
function es1() {
  let nombre = "Gabriela";
  let profesion = "programadora";
  alert(`${nombre} es ${profesion}`);
}

// 2
function es2() {
  let precio = Number(prompt("Ingrese el precio del articulo"));
  let cantidad = Number(prompt("Ingrese la cantidad"));
  function calcular() {
    let calculo = precio * cantidad;
    return calculo;
  }
  let resultado = calcular();
  alert(`Debe abonar $${resultado}`);
}

//CONDICIONALES
/* if (condition) {
    
} else {
    
} */

/* OPERADORES DE COMPARACION: 
< menor
> mayor
<= menor o igual
>= mayor o igual
== igual
=== estrictamente igual
!= Distinto

OPERADORES LOGICOS
    &&(AND) (Es TRUE cuando ambas condiciones son verdaderas)
    ||(OR) (Es TRUE cuando alguna de las condiciones es verdadera)
    !(NOT) (Niega la confirmacion)
    

OPERADOR TERNARIO
(condicion)?true:false
    es obligatorio tener las dos condiciones, true y false
*/
