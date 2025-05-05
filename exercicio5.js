//exercicio 5

const prompt = require('prompt-sync')();

const pesoKg = parseFloat(prompt("Digite seu peso em kg (exemplo: 70.8): "));

const alturaM = parseFloat(prompt("Digite sua altura em m (exemplo: 1.75): "))

const imc = pesoKg / (alturaM * alturaM);

console.log("Seu IMC é: ", imc.toFixed(1))

if (imc < 18.5) {
    console.log("Você está abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu peso é ideal")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso")
} else {
    console.log("Você está com obesidade")
}

/*
Cálculo do IMC e classificação foram retiradas do site
tuasaude.com
*/