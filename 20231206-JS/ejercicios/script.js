function entrada() {
  let texto = document.getElementById("visor").value;
  let resultado = document.getElementById("resultado");
  let textoAdd = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if ("aeiou".includes(letra)) {
      textoAdd += "-";
    } else {
      textoAdd += letra;
    }
  }
  resultado.innerText = textoAdd;
}
