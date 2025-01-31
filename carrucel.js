// Seleccionamos los elementos necesarios
const fotosContainer = document.querySelector('.fotos1');
const fotos = document.querySelectorAll('.fotos1 img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

// Función para mostrar la foto actual
function mostrarFoto() {
  fotosContainer.style.transform = `translateX(${-index * 400}px)`;
}

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
  index = (index + 1) % fotos.length; // Avanza al siguiente (vuelve al inicio al final)
mostrarFoto();
});

// Botón "Anterior"
prevButton.addEventListener('click', () => {
  index = (index - 1 + fotos.length) % fotos.length; // Retrocede (vuelve al final al inicio)
mostrarFoto();
});

// Ajustar tamaño al cambiar el tamaño de la ventana
window.addEventListener('resize', mostrarFoto);