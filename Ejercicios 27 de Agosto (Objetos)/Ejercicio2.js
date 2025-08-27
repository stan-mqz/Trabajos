/*Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. */

const usuario = {
    user : "Manuel",
    email : "correo@correo.com",
    rol : "Jefe"
}


const {user, email, rol} = usuario

console.log(user)
console.log(email)
console.log(rol)