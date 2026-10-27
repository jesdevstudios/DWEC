function cambiarImagenPrincipal(indice) {
    const miniaturas = document.querySelectorAll('.miniatura');
    const miniaturaSeleccionada = miniaturas[indice];
    const nuevoSrc = miniaturaSeleccionada.getAttribute('src');
    const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.setAttribute('src', nuevoSrc);
    resaltarMiniatura(indice);
}

function resaltarMiniatura(indice) {
    const miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach(img => img.classList.remove('activa'));
    miniaturas[indice].classList.add('activa');
}