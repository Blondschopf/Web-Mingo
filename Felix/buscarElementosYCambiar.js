// buscar elementos en el dom y cambiar sus propiedades

// Buscamos el elemento por su ID en el DOM
let elementoTitulo = document.getElementById("titulo");

// Este función cambia el contenido del elemento que antes buscamos
function cambiarTextoDeTitulo() {
  elementoTitulo.innerHTML = "Otro contenido";
}
