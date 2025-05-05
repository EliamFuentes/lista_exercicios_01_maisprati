//exercicio 2

const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite a sua idade: "));

if (idade < 12) {
    console.log("Você entra na categoria criança!");
} else if (idade >= 12 && idade < 18) {
    console.log("Você entra na categoria adolescente!");
} else if (idade >= 18 && idade < 60) {
    console.log("Você entra na categoria adulto!");
} else {
    console.log("Você entra na categoria idoso!");
}