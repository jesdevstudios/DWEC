// Estado de la aplicación
const productos = [];
let contadorId = 1;

// Referencias al DOM
const formulario = document.getElementById('formulario-compra');
const buscadorInput = document.getElementById('buscador');
const listaUl = document.getElementById('lista');
const totalP = document.getElementById('total');

// 1 & 2. Añadir producto y control de duplicados con find()
const guardarProducto = (e) => {
  e.preventDefault();

  const elementos = formulario.elements;
  const nombre = elementos.producto.value.trim();
  const precio = elementos.precio.valueAsNumber;
  const unidades = elementos.unidades.valueAsNumber;

  // Buscar si ya existe el producto (sin distinguir mayúsculas/minúsculas)
  const productoExistente = productos.find(
    (prod) => prod.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (productoExistente) {
    // Si existe, se le suman las unidades y se mantiene el precio original
    productoExistente.unidades += unidades;
  } else {
    // Si no existe, se añade como nuevo objeto
    productos.push({
      id: contadorId++,
      nombre,
      precio,
      unidades
    });
  }

  // Limpiar el formulario y devolver el foco al campo del producto
  formulario.reset();
  elementos.producto.focus();

  // Actualizar la interfaz
  pintar();
};

// 3. Pintar la lista con map(), buscador (filter + includes) y total con reduce()
const pintar = () => {
  const textoBuscador = buscadorInput.value.toLowerCase();

  // Filtrar productos según la búsqueda actual
  const productosFiltrados = productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(textoBuscador)
  );

  // Generar HTML de los <li> usando map()
  listaUl.innerHTML = productosFiltrados
    .map(
      (prod) => `
    <li data-id="${prod.id}">
      ${prod.nombre}:${prod.unidades} x${prod.precio.toFixed(2)} €
      <button data-accion="restar">-</button>
      <button data-accion="sumar">+</button>
      <button data-accion="borrar">Borrar</button>
    </li>
  `
    )
    .join('');

  // Calcular el total de TODOS los productos utilizando reduce()
  const total = productos.reduce(
    (acum, prod) => acum + prod.precio * prod.unidades,
    0
  );
  totalP.textContent = `Total:${total.toFixed(2)} €`;
};

// Requisito 1 de Delegación de eventos: Objeto de acciones para evitar if largo
const accionesBotones = {
  sumar: (id) => {
    const prod = productos.find((p) => p.id === id);
    if (prod) prod.unidades++;
  },
  restar: (id) => {
    const prod = productos.find((p) => p.id === id);
    if (prod && prod.unidades > 1) prod.unidades--;
  },
  borrar: (id) => {
    const indice = productos.findIndex((p) => p.id === id);
    if (indice !== -1) {
      // Filtrar el array para eliminar el elemento seleccionado
      const productoEliminado = productos[indice];
      const nuevosProductos = productos.filter((p) => p.id !== productoEliminado.id);
      productos.length = 0;
      productos.push(...nuevosProductos);
    }
  }
};

// Manejador del evento click en la lista usando delegación de eventos
const gestionarClickLista = (e) => {
  const boton = e.target.closest('button');
  if (!boton) return;

  const li = boton.closest('li');
  const id = Number(li.dataset.id);
  const accion = boton.dataset.accion;

  if (accionesBotones[accion]) {
    accionesBotones[accion](id);
    pintar();
  }
};

// Requisito 4: Control de foco (focusin y focusout)
const manejarFocusIn = (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.classList.add('activo');
  }
};

const manejarFocusOut = (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.classList.remove('activo');
  }
};

// Asignación de escuchadores de eventos
formulario.addEventListener('submit', guardarProducto);
formulario.addEventListener('focusin', manejarFocusIn);
formulario.addEventListener('focusout', manejarFocusOut);

listaUl.addEventListener('click', gestionarClickLista);
buscadorInput.addEventListener('input', pintar);

// Renderizado inicial
pintar();