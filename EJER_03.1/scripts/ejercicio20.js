// EJERCICIO 20
const enlacePartida = document.querySelectorAll('nav a')[1];
// Subimos al body o header más alto para buscar luego el h1
const h1DesdeEnlace = enlacePartida.closest('body').querySelector('h1');
h1DesdeEnlace.style.color = 'orange';