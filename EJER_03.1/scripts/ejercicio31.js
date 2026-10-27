// EJERCICIO 31
const cardReact = Array.from(document.querySelectorAll('.card')).find(card => card.querySelector('h2').textContent.includes('React'));
if (cardReact) {
    // Buscamos solo dentro de esa tarjeta
    const parrafoOcultoReact = cardReact.querySelector('.oculto'); 
    if(parrafoOcultoReact) {
        parrafoOcultoReact.textContent += ' (¡Oferta especial!)';
    }
}