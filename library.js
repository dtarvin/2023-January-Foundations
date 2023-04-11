function convertFahrenheitToCelcius(fahrDegree) {
    var celcDegree = (fahrDegree - 32) * 5 / 9;
    return celcDegree;
}

console.log(convertFahrenheitToCelcius(32));
console.log(convertFahrenheitToCelcius(212));