// Exercício 7: Área do retângulo.
function areaRetangulo(base, altura) {
    return base * altura;
}

let baseRet = parseFloat(prompt("Digite a base do retângulo"));
let alturaRet = parseFloat(prompt("Digite a altura do retângulo"));
console.log(`A área do retângulo é ${areaRetangulo(baseRet, alturaRet)}`);