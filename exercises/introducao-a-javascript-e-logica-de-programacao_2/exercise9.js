let numeros = [];

for(let indice = 0; indice <= 25; indice += 1) {
    numeros.push(indice);
}
console.log(numeros);

for(let indice = 0; indice < numeros.length; indice += 1) {
    console.log(numeros[indice] / 2);
}