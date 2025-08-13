/*

De un código generado automáticamente solo se requiere mostrar los
últimos 4 caracteres

*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el código : ", (codigo) => {
  const caracteresFinales = codigo.slice(-4);
  console.log(`Los últimos 4 caracteres del código son: ${caracteresFinales}`);
  rl.close();
});

rl.close();
