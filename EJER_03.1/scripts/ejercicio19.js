// EJERCICIO 19
const primerDivInfo = document.querySelector('.info');
const tarjetaPadre = primerDivInfo.parentElement; // Sube a la tarjeta
const primeraImagen = tarjetaPadre.firstElementChild; // Baja al primer hijo (imagen)
console.log(primeraImagen);