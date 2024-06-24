// Desafio 1: Contador de 1 a 10 usando `while`
function contadorDe1a10() {
    let contador = 1;
    let resultado = '';
    while (contador <= 10) {
        resultado += contador + '<br>';
        contador++;
    }
    document.getElementById('resultado1').innerHTML = resultado;
}

// Desafio 2: Contador de 10 a 0 usando `while`
function contadorDe10a0() {
    let contador = 10;
    let resultado = '';
    while (contador >= 0) {
        resultado += contador + '<br>';
        contador--;
    }
    document.getElementById('resultado2').innerHTML = resultado;
}

// Desafio 3: Contagem regressiva a partir de um número dado pelo usuário
function contagemRegressiva() {
    let numero = parseInt(document.getElementById('numeroRegressivo').value);
    let resultado = '';
    while (numero >= 0) {
        resultado += numero + '<br>';
        numero--;
    }
    document.getElementById('resultado3').innerHTML = resultado;
}

// Desafio 4: Contagem progressiva até um número dado pelo usuário
function contagemProgressiva() {
    let numero = parseInt(document.getElementById('numeroProgressivo').value);
    let contador = 0;
    let resultado = '';
    while (contador <= numero) {
        resultado += contador + '<br>';
        contador++;
    }
    document.getElementById('resultado4').innerHTML = resultado;
}

