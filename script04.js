// Exercício 4: Par ou ímpar.
function ehPar(numero){
    return numero % 2 === 0;
}

let numero = parseInt(prompt("Digite um número"));
console.log(`É par?` + ehPar(numero));