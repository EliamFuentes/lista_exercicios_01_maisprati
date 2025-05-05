//exercicio 6

const prompt = require('prompt-sync')();

const A = parseFloat(prompt("Digite o valor do lado A: "));

const B = parseFloat(prompt("Digite o valor do lado B: "));

const C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores informados não foram um triângulo");
}