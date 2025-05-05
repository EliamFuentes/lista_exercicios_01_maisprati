//exercicio 14

const prompt = require('prompt-sync')();

const entrada = prompt("Digite um número inteiro não negativo: ");
const numero = parseInt(entrada);

if (isNaN(numero) || numero < 0) {
    console.log("Erro: digite um número inteiro não negativo.");
} else {
    let fatorial = 1;
    let expressao = `${numero}! = `;

    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
        if (i === 1) {
            expressao += `${i} = `;
        } else {
            expressao += `${i} x `;
        }
    }

    expressao += fatorial;

    console.log(expressao);
}

