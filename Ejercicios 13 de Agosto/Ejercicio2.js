/*
Un sistema de registro de usuarios necesita guardar todos los correos
electrónicos en minúsculas para evitar duplicados causados por
diferencias en mayúsculas y minúsculas. Además, se requiere verificar si
el correo pertenece al dominio @gmail.com antes de aceptarlo
*/ 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Ingresa tu correo electronico: ", (correo) => {
    const correoMinus = correo.toLowerCase()
    const perteneceGmail = correoMinus.includes("@gmail.com")

    if (!perteneceGmail) {
        console.log('El correo no pertenece al dominio @gmail.com, por lo tanto, no es válido')
        console.log(`El correo ingresado es: ${correoMinus}`)
        return rl.close()
    }

    console.log('El correo ha sido ingresado correctamente')
    console.log(`El correo ingresado es: ${correoMinus}`)

    
    rl.close()
})
