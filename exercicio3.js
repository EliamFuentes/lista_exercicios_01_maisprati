//exercicio 3

const prompt = require('prompt-sync')();

const nota = parseFloat(prompt("Digite a sua nota (0 a 10): "));

if (nota < 0 || nota > 10 || isNaN(nota)) {
    console.log("Erro: A nota precisa estar entre 0 e 10.");
} else if (nota < 4) {
    console.log("Você está REPROVADO!");
} else if (nota >= 4 && nota < 6) {
    console.log("Você está EM RECUPERAÇÃO!");
} else {
    console.log("Você está APROVADO!");
}