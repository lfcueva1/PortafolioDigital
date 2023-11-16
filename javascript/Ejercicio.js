// JavaScript Document

function imprimirPalabrasRevertidas() {
    var oracionInput = document.getElementById("oracionInput").value;
    var palabrasRevertidas = revertirPalabras(oracionInput);
    document.getElementById("resultado").textContent = "Palabras al revés: " + palabrasRevertidas;
}

function revertirPalabras(oracion) {
    var palabras = oracion.split(' ');
    var resultado = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabraRevertida = palabras[i].split('').reverse().join('');
        resultado += palabraRevertida + " ";
    }

    return resultado;
}