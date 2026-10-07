// tienda.js
// Ejercicio integrador UT 2.1 + UT 2.2: Tienda de música
//
// Completa cada función. No cambies su nombre ni sus parámetros.
// Comprueba tu trabajo con:  node pruebas.js
// Cuando todo esté en verde:  node main.js
//
// Recuerda: salvo en la PARTE 5, las funciones NO deben modificar
// los arrays que reciben. Si necesitas ordenar, copia primero.

// ================================================================
// PARTE 1 · EL CATÁLOGO
// ================================================================

// 1.1 Convierte la matriz [[nombre, categoria, precio, stock], ...]
//     en un array de objetos { nombre, categoria, precio, stock }.
//     Si lo que recibe no es un array, devuelve [].
export const crearCatalogo = (matriz) => {
  if (!Array.isArray(matriz) || matriz.length == 0){
    return[];
  }
  return matriz.map(([nombre, categoria, precio, stock]) => ({
    nombre,
    categoria,
    precio,
    stock
  }));
};
// 1.2 Devuelve un catálogo NUEVO con las novedades (que llegan en
//     formato matriz) añadidas al final.
export const ampliarCatalogo = (catalogo, matrizNovedades) => {
// PASO 1: Control de errores / Validaciones
  const cat = Array.isArray(catalogo) ? catalogo : [];
  const novedades = Array.isArray(matrizNovedades) ? matrizNovedades : [];

  // PASO 2: Transformación de la matriz
  const catalogoNovedades = crearCatalogo(novedades);

  // PASO 3: Copia y combinación inmutable
  return [...cat, ...catalogoNovedades];
};

// 1.3 Devuelve los nombres de todos los productos en orden
//     alfabético, respetando las tildes ('Vinilo Ópera' va tras 'Vinilo Jazz').
export const nombresOrdenados = (catalogo) => {
  // 1. Validar que el catálogo sea un array válido
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    return [];
  }

  // 2. Extraer solo los nombres
  const nombres = catalogo.map((producto) => producto.nombre);

  // 3. Ordenar alfabéticamente respetando tildes con localeCompare
  return nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
};

// 1.4 Devuelve una COPIA del catálogo ordenada por precio,
//     de menor a mayor o, si descendente es true, de mayor a menor.
export const ordenarPorPrecio = (catalogo, descendente = false) => {
  // 1. Validar que el catálogo sea un array válido
  if (!Array.isArray(catalogo)) {
    return [];
  }

  // 2. Crear una copia del array con el operador spread [...]
  const copiaCatalogo = [...catalogo];

  // 3. Ordenar en función del parámetro 'descendente'
  return copiaCatalogo.sort((a, b) => {
    return descendente ? b.precio - a.precio : a.precio - b.precio;
  });
};

// 1.5 Devuelve los nombres de los tres productos más baratos.
export const tresMasBaratos = (catalogo) => {
  // 1. Validar que el catálogo sea un array válido
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    return [];
  }

  // 2. Ordenar de menor a mayor precio (usando la función anterior)
  const ordenados = ordenarPorPrecio(catalogo, false);

  // 3. Tomar los primeros 3 productos y obtener solo sus nombres
  return ordenados.slice(0, 3).map((producto) => producto.nombre);
};

// ================================================================
// PARTE 2 · BÚSQUEDAS
// ================================================================

// 2.1 Devuelve el producto con ese nombre, sin distinguir mayúsculas
//     y minúsculas, o undefined si no existe.
export const buscarProducto = (catalogo, nombre) => {
  return catalogo.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

// 2.2 Devuelve true si existe un producto con ese nombre.
//     Obligatorio: usa includes.
export const existeProducto = (catalogo, nombre) => {
  if (!Array.isArray(catalogo) || typeof nombre !== 'string') {
    return false;
  }

  const nombres = catalogo.map((p) => p.nombre.toLowerCase());
  return nombres.includes(nombre.toLowerCase());
};

// 2.3 Devuelve la posición del producto en el catálogo, o -1.
export const posicionProducto = (catalogo, nombre) => {
  return catalogo.findIndex((p) => p.nombre === nombre);
};

// 2.4 Devuelve un array con los NOMBRES de los productos sin stock.
export const agotados = (catalogo) => {
  return catalogo
    .filter((p) => p.stock === 0)
    .map((p) => p.nombre);
};

// 2.5 Devuelve los productos con precio entre minimo y maximo
//     (ambos incluidos).
export const productosEntre = (catalogo, minimo, maximo) => {
  return catalogo.filter(
    (p) => p.precio >= minimo && p.precio <= maximo
  );
};

// ================================================================
// PARTE 3 · CÁLCULOS
// ================================================================

// 3.1 Valor total del almacén: suma de precio × stock.
export const valorAlmacen = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return 0;
  return catalogo.reduce((acc, p) => acc + p.precio * p.stock, 0);
};

// 3.2 Devuelve el producto (el objeto completo) más caro.
export const productoMasCaro = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return undefined;
  return catalogo.reduce((max, p) => (p.precio > max.precio ? p : max));
};

// 3.3 Devuelve un objeto con las unidades en stock de cada categoría:
//     { equipos: 7, accesorios: 29, discos: 14 }
export const unidadesPorCategoria = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return {};
  return catalogo.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + p.stock;
    return acc;
  }, {});
};

// 3.4 Devuelve true si hay AL MENOS un producto agotado.
export const hayAgotados = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return false;
  return catalogo.some((p) => p.stock === 0);
};

// 3.5 Devuelve true si TODOS los precios son números mayores que 0.
export const preciosValidos = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return false;
  return catalogo.every((p) => typeof p.precio === 'number' && p.precio > 0);
};

// ================================================================
// PARTE 4 · PEDIDOS
// ================================================================

// 4.1 Convierte el texto 'Lucía|Tocadiscos:1;Vinilo Jazz:2' en un objeto pedido.
export const parsearPedido = (texto) => {
  if (typeof texto !== 'string' || !texto.includes('|')) {
    return { cliente: '', lineas: [] };
  }

  const [cliente, resto] = texto.split('|');
  if (!resto) return { cliente, lineas: [] };

  const lineas = resto.split(';').map((item) => {
    const [nombre, cantidadStr] = item.split(':');
    return {
      nombre: nombre ? nombre.trim() : '',
      cantidad: Number(cantidadStr) || 0
    };
  });

  return { cliente, lineas };
};

// 4.2 Devuelve true si TODOS los productos del pedido existen y tienen stock suficiente.
export const puedeServirse = (catalogo, pedido) => {
  if (!Array.isArray(catalogo) || !pedido || !Array.isArray(pedido.lineas) || pedido.lineas.length === 0) {
    return false;
  }

  return pedido.lineas.every((linea) => {
    const prod = catalogo.find(
      (p) => p.nombre.toLowerCase() === linea.nombre.toLowerCase()
    );
    return prod && prod.stock >= linea.cantidad;
  });
};

// 4.3 Devuelve el importe total del pedido.
export const totalPedido = (catalogo, pedido) => {
  if (!Array.isArray(catalogo) || !pedido || !Array.isArray(pedido.lineas)) {
    return 0;
  }

  return pedido.lineas.reduce((total, linea) => {
    const prod = catalogo.find(
      (p) => p.nombre.toLowerCase() === linea.nombre.toLowerCase()
    );
    return total + (prod ? prod.precio * linea.cantidad : 0);
  }, 0);
};

// 4.4 Devuelve un catálogo NUEVO en el que se ha restado del stock
//     la cantidad pedida de cada producto. El original no cambia.
export const servirPedido = (catalogo, pedido) => {
  if (!Array.isArray(catalogo)) return [];
  if (!pedido || !Array.isArray(pedido.lineas)) return [...catalogo];

  return catalogo.map((prod) => {
    const linea = pedido.lineas.find(
      (l) => l.nombre.toLowerCase() === prod.nombre.toLowerCase()
    );
    if (linea) {
      return { ...prod, stock: prod.stock - linea.cantidad };
    }
    return { ...prod };
  });
};

// 4.5 Devuelve un texto formateado con el resumen del ticket del pedido.
export const generarTicket = (catalogo, pedido) => {
  if (!Array.isArray(catalogo) || !pedido || !Array.isArray(pedido.lineas)) {
    return '';
  }

  const lineasTexto = pedido.lineas
    .map((linea) => {
      const prod = catalogo.find(
        (p) => p.nombre.toLowerCase() === linea.nombre.toLowerCase()
      );
      const precioUnitario = prod ? prod.precio : 0;
      const subtotal = precioUnitario * linea.cantidad;
      return `${linea.cantidad} x ${linea.nombre} = ${subtotal} €`;
    })
    .join('\n');

  const total = totalPedido(catalogo, pedido);

  return `Cliente: ${pedido.cliente}\n${lineasTexto}\nTOTAL: ${total} €`;
};

// ================================================================
// PARTE 5 · COLA DE PEDIDOS Y CARRITO CON "DESHACER"
// En esta parte SÍ se modifican los arrays recibidos.
// ================================================================

// 5.1 COLA (el primero que llega es el primero en salir):
//     saca y devuelve el primer pedido de la cola.
export const atenderSiguiente = (cola) => {
  if (!Array.isArray(cola) || cola.length === 0) return undefined;
  return cola.shift();
};

// 5.2 Coloca el pedido al PRINCIPIO de la cola y devuelve
//     la nueva longitud de la cola.
export const agregarUrgente = (cola, pedido) => {
  if (!Array.isArray(cola)) return 0;
  return cola.unshift(pedido);
};

// 5.3 Añade el nombre al final del carrito y apunta la acción en el
//     historial: { accion: 'agregar', nombre }
export const agregarAlCarrito = (carrito, historial, nombre) => {
  if (!Array.isArray(carrito) || !Array.isArray(historial)) return;
  carrito.push(nombre);
  historial.push({ accion: 'agregar', nombre });
};

// 5.4 Quita la PRIMERA aparición del nombre en el carrito y apunta en
//     el historial: { accion: 'quitar', nombre, posicion }
//     Devuelve true, o false (sin tocar nada) si no estaba.
export const quitarDelCarrito = (carrito, historial, nombre) => {
  if (!Array.isArray(carrito) || !Array.isArray(historial)) return false;

  const posicion = carrito.indexOf(nombre);
  if (posicion === -1) return false;

  carrito.splice(posicion, 1);
  historial.push({ accion: 'quitar', nombre, posicion });
  return true;
};

// 5.5 PILA (la última acción es la primera en deshacerse):
//     saca la última acción del historial y la revierte:
//     - si fue 'agregar', quita la ÚLTIMA aparición de ese nombre;
//     - si fue 'quitar', vuelve a insertarlo en su posición original.
//     Devuelve true, o false si el historial estaba vacío.
export const deshacer = (carrito, historial) => {
  if (!Array.isArray(carrito) || !Array.isArray(historial) || historial.length === 0) {
    return false;
  }

  const ultimaAccion = historial.pop();

  if (ultimaAccion.accion === 'agregar') {
    // Revertir 'agregar': buscar la última aparición y eliminarla
    const ultimaPosicion = carrito.lastIndexOf(ultimaAccion.nombre);
    if (ultimaPosicion !== -1) {
      carrito.splice(ultimaPosicion, 1);
    }
  } else if (ultimaAccion.accion === 'quitar') {
    // Revertir 'quitar': insertar en su posición original
    carrito.splice(ultimaAccion.posicion, 0, ultimaAccion.nombre);
  }

  return true;
};

// ================================================================
// PARTE 6 · INFORME FINAL
// ================================================================

// 6.1 Atiende uno a uno (con atenderSiguiente) todos los pedidos de la
//     cola. Si puede servirse, actualiza el catálogo con servirPedido y lo
//     guarda en servidos; si no, en rechazados. Al terminar la cola queda vacía.
//     Devuelve { catalogo, servidos, rechazados }
export const procesarCola = (catalogo, cola) => {
  let catalogoActual = Array.isArray(catalogo) ? [...catalogo] : [];
  const servidos = [];
  const rechazados = [];

  if (!Array.isArray(cola)) {
    return { catalogo: catalogoActual, servidos, rechazados };
  }

  while (cola.length > 0) {
    const pedido = atenderSiguiente(cola);
    if (pedido) {
      if (puedeServirse(catalogoActual, pedido)) {
        catalogoActual = servirPedido(catalogoActual, pedido);
        servidos.push(pedido);
      } else {
        rechazados.push(pedido);
      }
    }
  }

  return { catalogo: catalogoActual, servidos, rechazados };
};

// 6.2 Recibe un array de pedidos y devuelve los nombres de los productos
//     vendidos, SIN repetidos y en orden alfabético.
export const productosVendidos = (pedidos) => {
  if (!Array.isArray(pedidos) || pedidos.length === 0) return [];

  const nombres = pedidos.flatMap((pedido) =>
    Array.isArray(pedido.lineas) ? pedido.lineas.map((linea) => linea.nombre) : []
  );

  // Eliminar duplicados con Set y ordenar con localeCompare
  const sinDuplicados = [...new Set(nombres)];
  return sinDuplicados.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
};

// 6.3 Devuelve un array de textos con una barra por producto:
//     'Altavoz: ■■■ (3)'
//     Obligatorio: crea la barra con new Array(...).fill('■')
export const graficoStock = (catalogo) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) return [];

  return catalogo.map((prod) => {
    const cantidad = prod.stock > 0 ? prod.stock : 0;
    const barra = new Array(cantidad).fill('■').join('');
    return `${prod.nombre}: ${barra} (${prod.stock})`;
  });
};