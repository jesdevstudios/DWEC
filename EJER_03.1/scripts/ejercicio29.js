// EJERCICIO 29
const enlacesNav = document.querySelectorAll('nav a');
enlacesNav.forEach(enlace => {
    enlace.setAttribute('data-tipo', 'enlace-nav');
});