// buscar elementos en el dom y cambiar sus propiedades

// Buscamos el elemento por su ID en el DOM
let elementoParrafo = document.getElementById("titulo");

// Este función cambia el contenido del elemento que antes buscamos
function cambiarParrafo() {
  elementoParrafo.innerHTML =
    "El gato doméstico​​, llamado más comúnmente gato, y de forma coloquial minino, ​ michino, ​ michi, ​ micho, ​ mizo, ​ miz, ​ morroño​ o morrongo, ​ y algunos nombres más, es un mamífero carnívoro de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano";
}
let elementoTitulo = document.getElementById("Parrafo");
function ToggleClass() {
  elementoTitulo.classList.toggle("texto-rojo");
}
