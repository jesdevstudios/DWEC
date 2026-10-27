// EJERCICIO 21
document.querySelector('.premium a, .premium button').addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace salte de página
    alert('Accediendo a información exclusiva para miembros premium');
});