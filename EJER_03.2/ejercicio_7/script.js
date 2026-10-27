const carrito = document.getElementById('carrito');
const spanTotal = document.getElementById('total');

document.getElementById('productos').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-anadir')) {
        const liClonado = e.target.parentNode.cloneNode(true);
        const botonClon = liClonado.querySelector('button');
        botonClon.textContent = 'Quitar';
        botonClon.className = 'btn-quitar';
        
        carrito.appendChild(liClonado);
        calcularTotal();
    }
});

carrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-quitar')) {
        e.target.parentNode.remove();
        calcularTotal();
    }
});

function calcularTotal() {
    let total = 0;
    const itemsCarrito = carrito.querySelectorAll('li');
    
    itemsCarrito.forEach(li => {
        const precio = parseFloat(li.getAttribute('data-price'));
        total += precio;
    });
    
    spanTotal.textContent = total;
}