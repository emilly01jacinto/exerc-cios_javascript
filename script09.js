// Exercício 9: Desconto.
function calcularDesconto(preco, percentual) {
    return preco - (preco * (percentual / 100));
}

let precoProd = parseFloat(prompt("Digite o preço do produto"));
let percDesc = parseFloat(prompt("Digite a porcentagem de desconto"));
console.log(`O valor final com desconto é R$ ${calcularDesconto(precoProd, percDesc).toFixed(2)}`);