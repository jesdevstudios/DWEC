import { obtenerLibros, agregarLibro } from './biblioteca.js';

console.log("--- Colección Inicial ---");
console.log(obtenerLibros());

const miNuevoLibro = {
  id: 11,
  titulo: "Donde los árboles cantan",
  autor: "Laura Gallego",
  paginas: 480
};

agregarLibro(miNuevoLibro)

console.log((obtenerLibros))

