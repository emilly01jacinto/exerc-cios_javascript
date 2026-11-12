// Exercício 3: Soma de dois números.
function soma(a, b){
    return a + b;
}

let num1Soma = parseFloat(prompt("Digite o primeiro número para somar"));
let num2Soma = parseFloat(prompt("Digite o segundo número para ser somado"));
console.log(`A soma de ${num1Soma} e ${num2Soma} é ${soma(num1Soma, num2Soma)}`);