//exercicio 13

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;

do {
    let entrada = prompt("Digite um número decimal (ou 0 para sair): ");
    numero = parseFloat(entrada);

    if (!isNaN(numero) && numero !== 0) {
        soma += numero;
        quantidade++;
    } else if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número.");
    }
} while (numero !== 0);

if (quantidade === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let media = soma / quantidade;
    console.log(`A média aritmética dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
}


