//exercicio 7

const prompt = require('prompt-sync')();

const precoMenos12 = 0.30;
const preco12ouMais = 0.25;

const entrada = prompt("Digite a quantidade de maçãs compradas: ");
const macasCompradas = parseInt(entrada);

if (isNaN(macasCompradas) || macasCompradas <= 0) {
    console.log("Erro: Digite um número válido de maçãs.");
} else {
    const preco = macasCompradas < 12 ? precoMenos12 : preco12ouMais;
    const total = macasCompradas * preco;
    console.log(`O valor final é: R$ ${total.toFixed(2)}`);
}
