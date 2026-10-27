const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Carlos', edad: 22 }
];

function construirTabla(datos) {
    const fragmento = document.createDocumentFragment();
    const tabla = document.createElement('table');
    
    datos.forEach(usuario => {
        const fila = document.createElement('tr');
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.nombre;
        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = usuario.edad;
        
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        tabla.appendChild(fila);
    });

    fragmento.appendChild(tabla);
    document.getElementById('contenedor-tabla').appendChild(fragmento);
}

construirTabla(usuarios);