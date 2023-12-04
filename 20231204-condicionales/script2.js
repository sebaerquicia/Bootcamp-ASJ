//switch
/* function switch1() {
  let dato = prompt(
    "Ingrese alguna de las siguientes palabras: casa, perro, pelota, arbol o genio"
  );
  console.log(dato);
  switch (dato) {
    case "casa":
      alert("House");
      break;
    case "perro":
      alert("Dog");
      break;
    case "arbol":
      alert("Tree");
      break;
    case "pelota":
      alert("Ball");
      break;
    case "genio":
      alert("Genious");
      break;
    default:
      alert("Ingrese un valor valido");
      break;
  }
}

function switch2() {
  let val = prompt(
    "Ingrese alguna de las siguientes valoraciones: - Muy Mala - Mala - Mediocre - Buena - Muy Buena"
  ).toLowerCase();
  const gracias = () => {
    alert("Gracias por valorar");
  };
  console.log(val);
  switch (val) {
    case "muy mala":
      alert("Calificaste la pelicula como Muy Mala. Lo lamentamos mucho.");
      gracias();
      break;
    case "mala":
      alert("Calificaste la pelicula como Mala. Lo lamentamos un poco.");
      gracias();
      break;
    case "mediocre":
      alert("Calificaste la pelicula como Mediocre. Mirá alguna mejor.");
      gracias();
      break;
    case "buena":
      alert("Calificaste la pelicula como Buena. Bien ahí.");
      gracias();
      break;
    case "muy buena":
      alert(
        "Calificaste la pelicula como Muy Buena. Te regalamos 1 mes gratis por la buena onda."
      );
      gracias();
      break;
    default:
      alert("Ingrese un valor valido");
      break;
  }
} */

// while

function sumatoriaNum() {
  let numero = Number(prompt("Ingrese un numero"));
  let sumatoria = 0;
  n = 1;
  while (n <= numero) {
    sumatoria += n;
    n++;
  }
  let promedio = sumatoria / 2;
  alert(
    "El promedio de la sumatoria de todos los numeros enteros hasta el numero ingresado es: " +
      promedio
  );
}

/* Contador De Positivos

En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.

 */

function cantPositivos() {
  let contador = -1;
  let n = 0;
  while (n >= 0) {
    n = Number(prompt("Ingrese un numero entero"));
    contador++;
  }
  alert("La cantidad de numeros positivos ingresados es " + contador);
}

/* FizzBuzz hecho con for*/
fizzBuzz();
function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log(i + " Fizz");
    } else if (i % 5 === 0) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
  }
}
/* simular un bar con una sola mesa. Cuando venga el usuario quiero simular
le muestro una lista de productos que puede seleccionar
cuando pide la cta puede dejar propina
simular un mozo y le puedo pedir chistes */

alert("Bienvenido/a al mejor bar del condado");
let cuenta = 0;
let rta;
let prod;
let prop;
let continuar= true;
let cantidad = 0;
let propina = 1.15;
let coca = 500;
let tostado = 2300;
let cerveza = 1200;
let empanada = 300;
do {
  rta = Number(
    prompt(
      "Ingrese una de las opciones! \n1- Quiero pedir algo YA \n2- La cuenta, jefe \n3- Tirame un chiste \n0- Para salir"
    )
  );
  switch (rta) {
    case 0:
      break;
    case 1:
      do {
        prod = Number(
          prompt(
            `Que desea consumir? \n1- CocaCola = $${coca}. \n2- Tostado de JyQ = $${tostado}. \n3- Cerveza = $${cerveza}. \n4- Empanadas = $${empanada}\n0- Para volver`
          )
        );

        switch (prod) {
          case 0:
            break;
          case 1:
            cantidad = Number(prompt("Cuantas CocaCola quiere?"));
            while (cantidad > 0) {
              cuenta += cantidad * coca;
              cantidad = 0;
            }
            break;
          case 2:
            cantidad = Number(prompt("Cuantos tostados completos quiere?"));
            while (cantidad > 0) {
              cuenta += cantidad * tostado;
              cantidad = 0;
            }
            break;
          case 3:
            cantidad = Number(prompt("Cuantas cervezas de litro quiere?"));
            while (cantidad > 0) {
              cuenta += cantidad * cerveza;
              cantidad = 0;
            }
            break;
          case 4:
            cantidad = Number(prompt("Cuantas empanadas de JyQ quiere?"));
            while (cantidad > 0) {
              cuenta += cantidad * empanada;
              cantidad = 0;
            }
            break;
          default:
            alert("Ingrese un valor valido");
        }
      } while (prod != 0);
      break;
    case 2:
      do {
        prop = Number(
          prompt(
            "Desea agregar una propina del 15%? \n1- Si \n2- No \n0- Salir"
          )
        );
        switch (prop) {
          case 0:
            break;
          case 1:
            alert("El total a pagar es " + cuenta * propina);
            break;
          case 2:
            alert("El total a pagar es " + cuenta);
            break;
          default:

            break;
        }
      } while (prop != 0);
      break;
    case 3:
      alert(
        "¿Qué le dice un jardinero a otro? Seamos felices mientras podamos."
      );
      break;
    default:
      alert("Apretaste cualquiera eh");
      rta=0;
      break;
  }
} while (rta != 0);
alert("Gracias por venir");
