// Exercício 10: Maioridade.
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

let idadeUsuario = parseInt(prompt("Digite sua idade"));
console.log(`Você é ${verificarIdade(idadeUsuario)}`);