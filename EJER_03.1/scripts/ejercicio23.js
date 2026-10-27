// EJERCICIO 23
// Buscamos la tarjeta que contiene el texto "React" en su título h2
const tarjetas = document.querySelectorAll('.card');
const tarjetaReact = Array.from(tarjetas).find(tarjeta => tarjeta.querySelector('h2').textContent.includes('React'));

if (tarjetaReact) {
    const tituloReact = tarjetaReact.querySelector('h2');
    const parrafoOculto = tarjetaReact.querySelector('.oculto'); // Asumiendo que tiene clase oculto

    tituloReact.addEventListener('click', () => {
        // Alternamos o mostramos el bloque
        parrafoOculto.style.display = 'block'; 
    });
}