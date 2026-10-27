// EJERCICIO 32
const todasLasTarjetas = document.querySelectorAll('.card');
todasLasTarjetas.forEach(tarjeta => {
    const imagen = tarjeta.querySelector('img');
    if(imagen) {
        imagen.classList.add('imagen-curso');
    }
});