function generarInformeDeValidacion() {
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const informeDiv = document.getElementById('informe-errores');

    const nombre = inputNombre.value;
    const email = inputEmail.value;

    informeDiv.innerHTML = '';
    informeDiv.classList.remove('exito');

    let errores = 0;

    if (nombre.length <= 3) {
        const errorTexto = document.createElement('p');
        errorTexto.textContent = 'El nombre debe tener más de 3 caracteres.';
        informeDiv.appendChild(errorTexto);
        errores++;
    }

    if (!email.includes('@')) {
        const errorTexto = document.createElement('p');
        errorTexto.textContent = 'El email debe contener un "@".';
        informeDiv.appendChild(errorTexto);
        errores++;
    }

    if (errores === 0) {
        const exitoTexto = document.createElement('p');
        exitoTexto.textContent = 'Formulario válido';
        informeDiv.appendChild(exitoTexto);
        informeDiv.classList.add('exito');
    }
}