//exercicio 10

const prompt = require('prompt-sync')();

const numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

if (Number.isInteger(numeroInteiro)) {
    let contador = 0;

    while (contador < 10) {
        console.log(numeroInteiro);
        contador++;
    }
} else {
    console.log("O número digitado não é um inteiro.");
}

