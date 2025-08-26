// Un edificio tiene 10 habitaciones por piso. El usuario ingresa el número de habitación
// y el programa calcula en qué piso está, dividiendo entre 10 y redondeando hacia arriba

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el número de la habitación: ', (habitacion) => {
    const numHabitacion = parseInt(habitacion);
    const piso = Math.ceil(numHabitacion / 10);
    
    console.log(`La habitación ${numHabitacion} está en el piso ${piso}`);
    
    rl.close();
});


