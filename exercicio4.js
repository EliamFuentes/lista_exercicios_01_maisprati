//exercicio 4

const prompt = require('prompt-sync')();

console.log(`Opção 1 - Bom dia
    Opção 2 - Boa tarde
    Opção 3 - Boa noite`);

const entrada = parseInt(prompt("Digite uma das opções acima: "));

switch (entrada) {
    case 1:
        console.log("Bom dia!")
        break;
    case 2:
        console.log("Boa tarde!")
        break;
    case 3:
        console.log("Boa noite!")
        break;
    default:
        console.log("Opção invádlida! Por favor, escolha uma das possíveis opções")
        break;
}