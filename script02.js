// Exercício 2: O dobro.
function dobro(numero){
    return numero * 2;
}

let numeroDobro = parseFloat(prompt("Digite um número para ver o dobro"));
console.log(`O dobro de ${numeroDobro} é ${ dobro(numeroDobro)}`);