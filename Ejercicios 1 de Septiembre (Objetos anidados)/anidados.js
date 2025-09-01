const estudiante = {
  nombre: "Stanley",
  apellido: "Marquez",
  edad: 19,
  direccion: {
    pais: "El Salvador",
    calle: "Avenida Gerardo Barrios",
    numCasa: 86,
  },
};

console.log(estudiante.direccion);

estudiante.colorOjos = "Azules"

estudiante["direccion"].ciudad = "Ciudad Barrios"

estudiante["direccion"].numCasa = 84

console.log(estudiante);