// EJERCICIO 26
const seccionesInfo = document.querySelectorAll('.card .info');
seccionesInfo.forEach(info => {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.classList.add('duracion');
    nuevoParrafo.textContent = 'Duración: 20 horas';
    info.appendChild(nuevoParrafo); // Se añade al final de .info
});