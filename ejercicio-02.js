const playlist = [
    { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200},
    { titulo: "Toto de loca", artista: "Metrika", duracion: 201},
    { titulo: "Kiss me again", artista: "Vieze Asbak", duracion: 160},
    { titulo: "Reflections", artista: "The Neighbourhood", duracion: 230},
    { titulo: "Tri Poloski", artista: "Davay", duracion: 170},
    { titulo: "Gemstone", artista: "Don Toliver", duracion: 270},
    { titulo: "Party Rock Anthem", artista: "LMFAO", duracion: 220},
    { titulo: "Red bull espiral#06", artista: "Disobey", duracion: 150},
    { titulo: "Dracukeo", artista: "Kidd Keo", duracion: 250},
    { titulo: "Guacho", artista: "La Joaqui", duracion: 200}, 
]

console.log("Procesando playlist")

const cancionesLargas = playlist.filter(cancion => cancion.duracion > 180)

const mensajesCanciones = cancionesLargas.map(cancion => {
  return `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`;
})

console.log(mensajesCanciones)
