// EJERCICIO 27
// Usamos el pseudo-selector :not para seleccionar los que no tienen la clase premium
const tarjetasEstandar = document.querySelectorAll('.card:not(.premium)');
tarjetasEstandar.forEach(tarjeta => {
    tarjeta.style.border = '2px dotted black';
});