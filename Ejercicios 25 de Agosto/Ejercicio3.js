// Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios

const listaPrecios = [30, 52, 35, 1, 12, -3];

const precioMasBarato = Math.min(...listaPrecios);
const precioMasCaro = Math.max(...listaPrecios);


console.log(`Lista de precios: [${listaPrecios}`);
console.log(`Precio más barato: $${precioMasBarato}`);
console.log(`Precio más caro: $${precioMasCaro}`);