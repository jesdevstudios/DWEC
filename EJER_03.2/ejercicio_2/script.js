function ocultarTodasLasRespuestas() {
    const respuestas = document.querySelectorAll('li p');
    respuestas.forEach(p => p.classList.add('oculto'));
}

function revelarRespuesta(elementoH2) {
    ocultarTodasLasRespuestas();
    const respuesta = elementoH2.nextElementSibling;
    respuesta.classList.remove('oculto');
}