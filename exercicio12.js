//exercicio 12

const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Erro: Digite um número válido.");
} else {
    console.log(`\nTabuada do ${numero}:\n`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}