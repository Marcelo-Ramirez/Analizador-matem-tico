function analizarCodigo() {
    const codigo = document.getElementById('codigo').value;
    try {
        const resultado = miParser.parse(codigo);
        if(resultado.value == undefined){
            document.getElementById('resultado').innerText = "Resultado: " + resultado;         
        }else{
            document.getElementById('resultado').innerText = "Resultado: " + resultado.value;
        }
    } catch (error) {
        document.getElementById('resultado').innerText = "Error de análisis: " + error.message;
    }
}

document.getElementById('modoOscuro').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('modo-oscuro');
    } else {
        document.body.classList.remove('modo-oscuro');
    }
});