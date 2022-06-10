/* var1 = 9;
let var2 = 1;

if (var1 === 9) {
  console.log("Var1 es mayor o igual que var2");
} else {
  console.log("Var1 es menor que 3");
} */

function Cambiar() {
  document.getElementById("parrafo").innerHTML =
    "lo abriste y no era un incedio, la neta te pasas";
}

function Linki() {
  document.getElementById("enlace").innerHTML =
    "<a href='https://www.youtube.com/watch?v=1WsA8lQXXt8'> Lorem ipsum dolor ";
}

function ToggleClass() {
  let okidoki = document.getElementById("shunsho");
  okidoki.classList.toggle("letrasfacheras");
}
