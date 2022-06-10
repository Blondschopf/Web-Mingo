// buscar elementos en el dom y cambiar sus propiedades

// Buscamos el elemento por su ID en el DOM
let elementoParrafo = document.getElementById("Titulo");

// Este función cambia el contenido del elemento que antes buscamos
function CambiarParrafo() {
  elementoParrafo.innerHTML =
    "hoolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
}

let elementoTitulo = document.getElementById("Parrafo");

function ToggleClass() {
  elementoTitulo.classList.toggle("texto-rojo");
}
