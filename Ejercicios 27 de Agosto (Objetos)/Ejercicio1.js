/*Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado.*/ 

const animal = {
    raza: "perro",
    tamaño: "170cm",
    color: "negro"
}

console.log(animal)


/*Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza*/


animal.nombre = "Tommy"
delete animal.raza
console.log(animal)