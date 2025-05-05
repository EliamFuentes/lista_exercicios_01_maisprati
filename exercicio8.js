//exercicio 8 

const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt("Digite um valor: "));
const valor2 = parseFloat(prompt("Digite outro valor: "));

if (valor1 !== valor2) {
    if (valor1 < valor2) {
        console.log(valor1);
        console.log(valor2);
    } else {
        console.log(valor2);
        console.log(valor1);
    }
} else {
    console.log("Os valores são iguais, digite dois valores diferentes.");
}