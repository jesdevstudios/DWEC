const contenedorBotones = document.getElementById('botones-tabs');

contenedorBotones.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const contenidos = document.querySelectorAll('.contenido-tab');
        contenidos.forEach(div => div.classList.add('oculto'));
        
        const idMostrar = e.target.getAttribute('data-id');
        document.getElementById(idMostrar).classList.remove('oculto');
    }
});