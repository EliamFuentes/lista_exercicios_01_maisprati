//exercicio 1


const prompt = require('prompt-sync')();

const numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

if (numeroInteiro % 2 === 0) {
    console.log("O número digitado é par!");
} else {
    console.log("O número digitado é ímpar!");
}