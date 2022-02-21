const CURRENT_NUMBER = document.getElementById("currentNumber");
CURRENT_NUMBER.style.color = "blue";

let botaoSubtrair = document.getElementById("subtrair");
let botaoSomar = document.getElementById("somar");
let contador = 0;

function subtrair() {
  contador--;
  if (contador < 0) {
    CURRENT_NUMBER.style.color = "red";
  }
  if (contador < -2) {
    botaoSubtrair.disable = true;
    contador = -2;
    CURRENT_NUMBER.innerHTML = contador;
  } else {
    CURRENT_NUMBER.innerHTML = contador;
  }
}

function somar() {
  contador++;
  if (contador >= 0) {
    CURRENT_NUMBER.style.color = "blue";
  }
  if (contador > 10) {
    botaoSomar.disable = true;
    contador = 10;
    CURRENT_NUMBER.innerHTML = contador;
  } else {
    CURRENT_NUMBER.innerHTML = contador;
  }
}

botaoSubtrair.addEventListener("click", subtrair);
botaoSomar.addEventListener("click", somar);
