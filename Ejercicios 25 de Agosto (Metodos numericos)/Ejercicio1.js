// Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número", (num) => {
    const cuadrado = Math.pow(numero, 2);
    const raizCuadrada = Math.sqrt(numero);
    
    console.log(`Cuadrado: ${cuadrado}`);
    console.log(`Raiz cuadrada ${raizCuadrada}:`);
})