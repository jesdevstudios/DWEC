import { 
  obtenerLibros, 
  agregarLibro, 
  eliminarLibro, 
  ordenarPorPaginas, 
  hayLibrosLargos, 
  todosSonLibrosCortos 
} from './biblioteca.js';

console.log(obtenerLibros());

ordenarPorPaginas();
console.log(obtenerLibros());

console.log(hayLibrosLargos(500));
console.log(todosSonLibrosCortos(500));

console.log(hayLibrosLargos(2000));
console.log(todosSonLibrosCortos(2000));

