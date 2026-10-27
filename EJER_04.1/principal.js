// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const botonContador = document.getElementById('boton-contador');
const mostrarContador = document.getElementById('mostrar-contador');
let clics = 0;

botonContador.addEventListener('click', () => {
    clics++;
    mostrarContador.textContent = clics;
});


// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjeta = document.getElementById('tarjeta');

tarjeta.addEventListener('mouseenter', () => {
    tarjeta.classList.add('resaltada');
    tarjeta.textContent = 'Ratón dentro';
});

tarjeta.addEventListener('mouseleave', () => {
    tarjeta.classList.remove('resaltada');
    tarjeta.textContent = 'Pasa el ratón por aquí';
});


// ---------- Ejercicio 3 · Espejo de texto ----------
const inputTexto = document.getElementById('input-texto');
const espejo = document.getElementById('espejo');

inputTexto.addEventListener('input', (evento) => {
    espejo.textContent = evento.target.value;
});


// ---------- Ejercicio 4 · Mover con el teclado ----------
const cajaTeclado = document.getElementById('caja-teclado');
let posicionX = 0;
let posicionY = 0;
const paso = 10;

cajaTeclado.addEventListener('keydown', (evento) => {
    // Solo mover si las teclas son flechas
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(evento.key)) {
        evento.preventDefault(); // Evita que la página haga scroll

        switch (evento.key) {
            case 'ArrowUp':
                posicionY -= paso;
                break;
            case 'ArrowDown':
                posicionY += paso;
                break;
            case 'ArrowLeft':
                posicionX -= paso;
                break;
            case 'ArrowRight':
                posicionX += paso;
                break;
        }

        cajaTeclado.style.transform = `translate(${posicionX}px, ${posicionY}px)`;
    }
});


// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById('paleta');
const textoColor = document.getElementById('texto-color');

// Delegación de eventos en el contenedor padre
paleta.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('color-btn')) {
        const colorSeleccionado = evento.target.getAttribute('data-color');
        textoColor.style.color = colorSeleccionado;
    }
});


// ---------- Ejercicio 6 · Grupo con foco ----------
const formularioFoco = document.getElementById('formulario-foco');

// Usamos focusin y focusout porque focus y blur no burbujean
formularioFoco.addEventListener('focusin', (evento) => {
    if (evento.target.classList.contains('campo-foco')) {
        evento.target.classList.add('activo');
    }
});

formularioFoco.addEventListener('focusout', (evento) => {
    if (evento.target.classList.contains('campo-foco')) {
        evento.target.classList.remove('activo');
    }
});


// ---------- Ejercicio 7 · Burbuja y captura ----------
const abuelo = document.getElementById('abuelo');
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
const logEventos = document.getElementById('log-eventos');

function registrarEvento(mensaje) {
    const p = document.createElement('p');
    p.textContent = mensaje;
    logEventos.appendChild(p);
}

// Limpiar el log al hacer clic en cualquier parte para ver mejor las fases
document.body.addEventListener('click', () => { logEventos.innerHTML = ''; }, true);

// Fase de Captura (true)
abuelo.addEventListener('click', () => registrarEvento('Abuelo (Captura)'), true);
padre.addEventListener('click', () => registrarEvento('Padre (Captura)'), true);
hijo.addEventListener('click', () => registrarEvento('Hijo (Captura)'), true);

// Fase de Burbuja (false o por defecto)
abuelo.addEventListener('click', () => registrarEvento('Abuelo (Burbuja)'), false);
padre.addEventListener('click', () => registrarEvento('Padre (Burbuja)'), false);
hijo.addEventListener('click', () => registrarEvento('Hijo (Burbuja)'), false);


// ---------- Ejercicio 8 · Detener y cancelar ----------
const enlaceCancelar = document.getElementById('enlace-cancelar');
const enlacePrevenir = document.getElementById('enlace-prevenir');

// 8.1 Detener propagación
enlaceCancelar.addEventListener('click', (evento) => {
    evento.stopPropagation(); // Evita que el evento suba al padre/abuelo
    registrarEvento('Clic en botón: Propagación detenida');
});

// 8.2 Prevenir comportamiento por defecto
enlacePrevenir.addEventListener('click', (evento) => {
    evento.preventDefault(); // Evita navegar a Google
    registrarEvento('Clic en enlace: Navegación prevenida');
});