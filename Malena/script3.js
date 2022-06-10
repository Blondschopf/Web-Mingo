// buscar elementos en el dom y cambiar sus propiedades

// Buscamos el elemento por su ID en el DOM
let elementoParrafo = document.getElementById("titulo");

// Este función cambia el contenido del elemento que antes buscamos
function cambiarParrafo() {
  elementoParrafo.innerHTML =
    "Nuestros felinos son animales cuyo sentido del olfato es bastante sensible a los olores fuertes. Ciertos olores como el del ajo, el del humo del tabaco, la pimienta, los desodorantes, el eucalipto, el vinagre o los cítricos, entre otros, les pueden resultar molestos.";
}
let elementoTitulo = document.getElementById("Parrafo");
function ToggleClass() {
  elementoTitulo.classList.toggle("texto-rojo");
}
