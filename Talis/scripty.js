/*let el_psy_kongroo = 7900;
let zona_convergencia = 0.9474;
let barrera_1_porciento = 0.0001;

if (el_psy_kongroo / zona_convergencia === barrera_1_porciento) {
  console.log("vuelves a la zona de convergencia");
} else {
  console.log("bienvenido a steins gate");
}

function SteinsGate() {
  if (el_psy_kongroo * barrera_1_porciento <= zona_convergencia) {
    console.log("bienvenido a Steins;Gate");
  } else {
    console.log("vuelves al punto de convergencia temporal");
  }
}
SteinsGate();
console.log();
*/

// let changer = document.getElementById("porro");

function Cambiar() {
  document.getElementById("porro").innerHTML = "legalizen la MariaJuana";
}

function cambiarLink() {
  document.getElementById("gate").innerHTML =
    "<a href='https://www.youtube.com/watch?v=QTn_nz1I9_Y'>El psy kongroo</a>";
}

function cambiaToggle() {
  let dd = document.getElementById("titre");
  dd.classList.toggle("lifen");
}
