const name = "Stan";
const edad = 19;
const altura = 1.72;

// Creación de objetos con literal

const persona = {
  nombre: "Stan",
  edad: 19,
  altura: 1.72,
};

// Imprimir

console.log(persona);

// Acceder a propiedades por punto

console.log(persona.nombre);

// Acceso a las propiedades por corchete

console.log(persona["edad"]);

// Agregamos mas propiedades al objeto

persona.nacionalidad = "Estadounidense";

console.log(persona);


//Eliminar propiedades del objeto
delete persona.altura
console.log(persona)


//Modificar el valor de una propiedad

persona.nombre = "Stanley"
console.log(persona)

//Asignado el valor del objeto de una variable
const nom = persona.nombre
console.log(nom)

//Destructuring
const {nombre} = persona
console.log(nombre)

