// Exercício 5: Maior de dois.
function maiorDeDois(a, b){
    return a > b ? a : b;
}

let aMaior = parseFloat(prompt("Digite um número para comparar"));
let bMaior = parseFloat(prompt("Digite um segundo número para comparar"));
console.log(`O maior número entre ${aMaior} e ${bMaior} é ${maiorDeDois(aMaior, bMaior)}`);