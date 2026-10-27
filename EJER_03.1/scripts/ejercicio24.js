// EJERCICIO 24
const titulosCursos = document.querySelectorAll('.card h2');
titulosCursos.forEach(titulo => {
    titulo.textContent = `[CURSO] ${titulo.textContent}`;
});