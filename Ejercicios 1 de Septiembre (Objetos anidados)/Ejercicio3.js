// Una biblioteca maneja información de sus libros:

// Información (titulo, autor, genero)

// Disponibilidad (copias, prestados, ubicacion)

// Registro (fechaPublicacion, fechaIngreso, ultimaRevision)

// Tareas a realizar:

// Crear el objeto libro.

// Mostrar la información del autor.

// Calcular cuántos ejemplares disponibles quedan (copias - prestados).

// Actualizar la ultimaRevision con la fecha actual.

// Cambiar el género del libro.

// Extraer titulo y ubicacion en variables.

// Mostrar el objeto actualizado.

const libro = {
    informacion: {
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Epicos",
    },
    disponibilidad: {
        copias: 5,
        prestados: 2,
        ubicacion: "Estante A, Nivel 3"
    },
    registro: {
        fechaPublicacion: "800 a.C.",
        fechaIngreso: "15-01-2020",
        ultimaRevision: "10-08-2023"
    }
};

console.log(libro);

console.log(libro.informacion.autor);

const ejemplaresDisponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;

console.log(ejemplaresDisponibles);

const fechaActual = "2025-09-01"
libro.registro.ultimaRevision = fechaActual;
console.log(fechaActual);

libro.informacion.genero = "Poesía Épica";
console.log(libro.informacion.genero);

const titulo = libro.informacion.titulo;
const ubicacion = libro.disponibilidad.ubicacion;
console.log(titulo);
console.log(ubicacion);

console.log(libro);