import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question(" Ingrese una frase ", (frase) => {
    console.log('\n === Tratamiento de cadenas ===')
   
    // 1. length - Devuelve la cantidad de caracteres en la cadena
    // Retorna: número entero que representa la longitud de la cadena
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es: ${fraseLength}`)

    // 2. toUpperCase - Convierte todos los caracteres de la cadena a mayúsculas
    // Retorna: nueva cadena con todos los caracteres en mayúsculas
    const fraseMayus = frase.toUpperCase()
    console.log(`La frase en mayúsculas es: ${fraseMayus}`)

    // 3. toLowerCase - Convierte todos los caracteres de la cadena a minúsculas
    // Retorna: nueva cadena con todos los caracteres en minúsculas
    const fraseMinus = frase.toLowerCase()
    console.log(`La frase en minúsculas es: ${fraseMinus}`)

    // 4. trim - Elimina espacios en blanco al inicio y al final de la cadena
    // Retorna: nueva cadena sin espacios al inicio y al final
    const fraseTrim = frase.trim()
    console.log(`La frase sin espacios al inicio y al final es: "${fraseTrim}"`)

    // 5. substring - Extrae una porción de la cadena desde una posición inicial hasta una final
    // Parámetros: (inicio, fin) - fin es opcional, si no se especifica va hasta el final
    // Retorna: nueva cadena con la porción extraída
    const fraseSubstring = frase.substring(0, 5)
    console.log(`Los primeros 5 caracteres de la frase son: "${fraseSubstring}"`)

    // 6. slice - Extrae una porción de la cadena, similar a substring pero permite índices negativos
    // Parámetros: (inicio, fin) - índices negativos cuentan desde el final de la cadena
    // Retorna: nueva cadena con la porción extraída
    const fraseSlice = frase.slice(-5)
    console.log(`Los últimos 5 caracteres de la frase son: "${fraseSlice}"`)

    // 7. replace - Reemplaza la primera ocurrencia de un texto por otro
    // Parámetros: (textoABuscar, textoReemplazo)
    // Retorna: nueva cadena con el primer reemplazo realizado
    const fraseReplace = frase.replace('hola', 'adios')
    console.log(`La frase con "hola" reemplazado por "adios" es: "${fraseReplace}"`)

    // 8. replaceAll - Reemplaza todas las ocurrencias de un texto por otro
    // Parámetros: (textoABuscar, textoReemplazo)
    // Retorna: nueva cadena con todos los reemplazos realizados
    const fraseReplaceAll = frase.replaceAll('hola', 'adios')
    console.log(`La frase con "hola" reemplazado por "adios" es: "${fraseReplaceAll}"`)

    // 9. includes - Verifica si la cadena contiene un texto específico
    // Parámetros: (textoABuscar)
    // Retorna: true si encuentra el texto, false si no
    const fraseIncludes = frase.includes('hola')
    console.log(`¿La frase contiene "hola"? ${fraseIncludes}`)

    // 10. indexOf - Busca la posición (índice) de la primera ocurrencia de un texto
    // Parámetros: (textoABuscar)
    // Retorna: posición del texto (0 o mayor) si lo encuentra, -1 si no lo encuentra
    const fraseIndexOf = frase.indexOf('hola')
    console.log(`La posición de "hola" en la frase es: ${fraseIndexOf}`)

    // 11. startsWith - Verifica si la cadena comienza con un texto específico
    // Parámetros: (textoABuscar)
    // Retorna: true si la cadena comienza con el texto, false si no
    const fraseStartsWith = frase.startsWith('hola')
    console.log(`¿La frase comienza con "hola"? ${fraseStartsWith}`)

    // 12. endsWith - Verifica si la cadena termina con un texto específico
    // Parámetros: (textoABuscar)
    // Retorna: true si la cadena termina con el texto, false si no
    const fraseEndsWith = frase.endsWith('adios')
    console.log(`¿La frase termina con "adios"? ${fraseEndsWith}`)

    // 13. split - Divide la cadena en un array basándose en un separador
    // Parámetros: (separador) - si se usa '' (cadena vacía), divide por cada carácter
    // Retorna: array con las partes de la cadena dividida
    const fraseArray = frase.split('')
    console.log(`La frase divida en palabras es ${fraseArray}`)
    rl.close()

})