//exercicio 11

const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numeroValido = false;
    let numero;

    while (!numeroValido) {
        let entrada = prompt(`Digite o ${i}º número: `);
        numero = parseFloat(entrada);

        if (!isNaN(numero)) {
            numeroValido = true;
        } else {
            console.log("Entrada inválida. Por favor, digite um número.");
        }
    }

    soma += numero;
}

console.log("A soma total dos números é:", soma);
