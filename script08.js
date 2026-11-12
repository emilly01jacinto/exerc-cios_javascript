// Exercício 8: Celsius para Fahrenheit.
function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}

let tempC = parseFloat(prompt("Digite a temperatura em Celsius"));
console.log(`${tempC}°C equivalem a ${celsiusParaFahrenheit(tempC)}°F`);