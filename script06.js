// Exercícios 6: Média de notas.
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));
console.log(`À média das notas é ${calcularMedia(nota1, nota2, nota3).toFixed(2)}`);