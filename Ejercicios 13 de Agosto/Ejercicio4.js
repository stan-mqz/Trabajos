/*Un programador quiere saber en qué parte de su mensaje aparece la
palabra error.*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese un mensaje: ", (mensaje) => {
  const indiceError = mensaje.indexOf("error");

  if (indiceError !== -1) {
    console.log(`La palabra "error" se encuentra en el índice: ${indiceError}`);
  } else {
    console.log('La palabra "error" no se encuentra en el mensaje.');
  }
  rl.close();
});
