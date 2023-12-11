
let buscar = document.getElementById("buscar");
let info = document.getElementById("info");

buscar.addEventListener("click", () => {
  let chiste = document.getElementById("buscar");
  console.log("Utilizando Fetch");
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json()) //Convertir a JSON
    .then((json) => {
      info.innerText = json.value;
    })
    .catch((error) => console.log("hubo un error: " + error));
});
