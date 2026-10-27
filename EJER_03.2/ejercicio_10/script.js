function generarLorem() {
    const inputCantidad = document.getElementById('cantidad');
    const numero = parseInt(inputCantidad.value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 0) return;

    resultado.innerHTML = '';
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < numero; i++) {
        const p = document.createElement('p');
        p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Párrafo generado número ${i + 1}.`;
        fragmento.appendChild(p);
    }

    resultado.appendChild(fragmento);
}