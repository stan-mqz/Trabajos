import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Ingrese eñ código del pedido (ej: PED-2025-0045): ", (codigo) => {
    const año = codigo.substring(4, 8).trim()
    const numero = codigo.substring(9).trim()

    console.log(`El año del pedido es: ${año}`)
    console.log(`El número del pedido es: ${numero}`)

    rl.close()
})