// EJERCICIO 22
document.getElementById('formulario-contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    // Suponemos que los campos tienen nombre o id (ej: nombre y mensaje)
    const nombre = document.querySelector('#formulario-contacto input[type="text"]').value;
    const mensaje = document.querySelector('#formulario-contacto textarea').value;
    console.log(`Nombre: ${nombre}, Mensaje: ${mensaje}`);
});