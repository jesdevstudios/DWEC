const localizaciones = [
    { ciudad: 'Madrid', pais: 'España' },
    { ciudad: 'París', pais: 'Francia' },
    { ciudad: 'Barcelona', pais: 'España' },
    { ciudad: 'Lyon', pais: 'Francia' },
    { ciudad: 'Roma', pais: 'Italia' }
];

const ulCiudades = document.getElementById('lista-ciudades');

localizaciones.forEach(loc => {
    const li = document.createElement('li');
    li.textContent = `${loc.ciudad} (${loc.pais})`;
    li.setAttribute('data-pais', loc.pais.toLowerCase());
    ulCiudades.appendChild(li);
});

function filtrarPorPais(textoBusqueda) {
    textoBusqueda = textoBusqueda.toLowerCase().trim();
    const elementosLi = ulCiudades.querySelectorAll('li');

    elementosLi.forEach(li => {
        const paisLi = li.getAttribute('data-pais');
        if (paisLi.includes(textoBusqueda)) {
            li.classList.remove('oculto');
        } else {
            li.classList.add('oculto');
        }
    });
}