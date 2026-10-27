const inputTarea = document.getElementById('nueva-tarea');
const btnAnadir = document.getElementById('btn-anadir');
const listaTareas = document.getElementById('lista-tareas');

btnAnadir.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto !== '') {
        const li = document.createElement('li');
        li.textContent = texto + ' ';
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        li.appendChild(btnEliminar);
        
        listaTareas.appendChild(li);
        inputTarea.value = '';
    }
});

listaTareas.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const liContenedor = e.target.parentNode;
        liContenedor.remove();
    }
});