// EJERCICIO 28
const categoriasArray = Array.from(document.querySelectorAll('.card .categoria')).map(cat => cat.textContent.trim());
console.log(categoriasArray);