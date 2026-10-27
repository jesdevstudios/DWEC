// EJERCICIO 25
const parrafosCategoria = document.querySelectorAll('.card .categoria');
parrafosCategoria.forEach(categoria => {
    if (categoria.textContent.trim() === 'Desarrollo Web') {
        categoria.closest('.card').style.backgroundColor = '#f0f0f0';
    }
});