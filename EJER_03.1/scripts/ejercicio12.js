// EJERCICIO 12
const enlaces = document.querySelectorAll('nav a');
// Suponiendo que el enlace de contacto es el último o buscando por su texto
const enlaceContacto = Array.from(enlaces).find(enlace => enlace.textContent.toLowerCase().includes('contacto')) || enlaces[enlaces.length - 1];
const totalCursos = document.querySelectorAll('.card').length;
enlaceContacto.textContent = `Contacto (${totalCursos} Cursos)`;