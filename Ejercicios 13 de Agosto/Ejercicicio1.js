/*
En un formulario web pides al usuario su nombre completo y quieres
asegurarte de que no haya espacios al inicio o final, y además quieres
mostrar cuántos caracteres tiene el nombre sin contar los espacios.

*/

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese su nombre completo: ", (nombre) => {
    const nombreTrim = nombre.trim()
    const nombreSinEspacios = nombreTrim.replace(" ", "")
    const nombreLength = nombreSinEspacios.length

    console.log(`El total de caracteres sin espacio es: ${nombreSinEspacios.length}`)
    console.log(`El nombre ingresado es: ${nombreSinEspacios}`)

    rl.close()
})
