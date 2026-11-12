function celsiusParaFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}

function criarObjetoTemperatura(celsius) {
  return {
    celsius: celsius,
    fahrenheit: celsiusParaFahrenheit(celsius),
    kelvin: celsiusParaKelvin(celsius)
  };
}

const celsiusInput = parseFloat(prompt("Informe a temperatura em Celsius:"));
console.log("Temperatura: " + celsiusInput + "°C");
console.log("Fahrenheit: " + celsiusParaFahrenheit(celsiusInput) + "°F");
console.log("Kelvin: " + celsiusParaKelvin(celsiusInput) + "K");

console.log("Objeto gerado:", criarObjetoTemperatura(celsiusInput));