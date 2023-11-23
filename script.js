const miParser = require('./gramatica.js');
const miCodigo = `x = 5 + 8`;
try {
    const resultado = miParser.parse(miCodigo); // reemplaza "a" con la cadena que quieras analizar
    console.log("Resultado:", resultado.value);
} catch (error) {
    console.error("Error de análisis:", error.message);
}