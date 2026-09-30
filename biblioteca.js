const libros = [
    {id: 1, titulo: "Don quijote de la mancha", autor: "Cervantes", paginas: 503},
    {id: 2, titulo: "Alas de Sangre", autor: "Rebecca Yarros", paginas: 790},
    {id: 3, titulo: "Alas de Hierro", autor: "Rebecca Yarros", paginas: 801},
    {id: 4, titulo: "Alas de Onix", autor: "Rebecca Yarros", paginas: 900},
    {id: 5, titulo: "El guardián entre el centeno", autor: "J.D.Salinger", paginas: 350},
    {id: 6, titulo: "El mapa de los anhelos", autor: "Alice Kellen", paginas: 483},
    {id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen", paginas: 380},
    {id: 8, titulo: "Corazón delator", autor: "Edgar Allan Poe", paginas: 201},
    {id: 9, titulo: "Harry Potter y el prisionero de azkaban", autor: "J.K.Rowling", paginas: 450},
    {id: 10, titulo: "Holly", autor: "Stephen King", paginas: 500},
]


export function agregarLibro(nuevoLibro) {
  libros.push(nuevoLibro);
}

export function obtenerLibros() {
  return libros;
}

export function eliminarLibro(id) {
  const indice = libros.findIndex(libro => libro.id === id);
  if (indice !== -1) {
    libros.splice(indice, 1);
  }
}

export function ordenarPorPaginas() {
  libros.sort((a, b) => a.paginas - b.paginas);
}

export function hayLibrosLargos(limitePaginas) {
  return libros.some(libro => libro.paginas > limitePaginas);
}

export function todosSonLibrosCortos(limitePaginas) {
  return libros.every(libro => libro.paginas < limitePaginas);
}